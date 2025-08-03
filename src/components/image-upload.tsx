import React, {
  useState,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Upload, X, FileImage } from "lucide-react";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
  className?: string;
  placeholder?: string;
  showPreview?: boolean;
  tempPreviewUrl?: string;
  disabled?: boolean;
  error?: string;
  value?: File | null;
}

export interface ImageUploadRef {
  clear: () => void;
}

export const ImageUpload = forwardRef<ImageUploadRef, ImageUploadProps>(
  (
    {
      onImageSelect,
      accept = "image/*",
      maxSize = 5,
      className = "",
      placeholder = "Click to upload image or drag and drop",
      showPreview = true,
      disabled = false,
      error,
      tempPreviewUrl,
      value,
    },
    ref
  ) => {
    const [preview, setPreview] = useState<string | null>(
      tempPreviewUrl || null
    );
    const [isDragging, setIsDragging] = useState(false);
    const [uploadError, setUploadError] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      clear: () => {
        setPreview(null);
        setUploadError("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
    }));

    const validateFile = (file: File): string | null => {
      // Check file type
      if (!file.type.startsWith("image/")) {
        return "Please select a valid image file";
      }

      // Check file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > maxSize) {
        return `File size must be less than ${maxSize}MB`;
      }

      return null;
    };

    const handleFileSelect = useCallback(
      (file: File) => {
        const validationError = validateFile(file);

        if (validationError) {
          setUploadError(validationError);
          //   onImageSelect(null);
          return;
        }

        setUploadError("");

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);

        onImageSelect(file);
      },
      [onImageSelect, maxSize]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileSelect(file);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const file = e.dataTransfer.files?.[0];
      if (file) {
        handleFileSelect(file);
      }
    };

    const handleRemove = () => {
      setPreview(null);
      setUploadError("");
      //   onImageSelect(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const handleClick = () => {
      if (!disabled) {
        fileInputRef.current?.click();
      }
    };

    const displayError = error || uploadError;

    // Use preview from state or create one from value prop
    React.useEffect(() => {
      if (value && value instanceof File) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(value);
      } else if (!value) {
        setPreview(null);
      }
    }, [value]);

    return (
      <div className={`w-full ${className}`}>
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
          relative border-2 border-dashed rounded-lg transition-all duration-200 cursor-pointer
          ${
            isDragging && !disabled
              ? "border-blue-400 bg-blue-50"
              : displayError
              ? "border-red-300 bg-red-50"
              : "border-gray-300 hover:border-gray-400 bg-gray-50"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
        `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            disabled={disabled}
            className="hidden"
          />

          {preview && showPreview ? (
            <div className="relative p-4">
              <img
                src={preview}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg object-contain"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                disabled={disabled}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div
                className={`mb-4 p-3 rounded-full ${
                  displayError ? "bg-red-100" : "bg-gray-200"
                }`}
              >
                {displayError ? (
                  <FileImage className="w-8 h-8 text-red-500" />
                ) : (
                  <Upload className="w-8 h-8 text-gray-500" />
                )}
              </div>

              <p className="text-sm text-gray-600 mb-1">{placeholder}</p>

              <p className="text-xs text-gray-400">
                Supports: JPG, PNG, GIF up to {maxSize}MB
              </p>
            </div>
          )}
        </div>

        {displayError && (
          <p className="mt-2 text-sm text-red-600">{displayError}</p>
        )}
      </div>
    );
  }
);

ImageUpload.displayName = "ImageUpload";
