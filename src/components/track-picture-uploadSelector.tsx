import { Trash2, Upload, User } from "lucide-react";
import { useRef, useState } from "react";

interface ProfilePhotoSelectorProps {
  image: File | null;
  setImage: (file: string | null) => void;
  preview: string | null;
  setPreview: (file: string | null) => void;
}

const TrackPhotoSelector = ({
  image,
  setImage,
  preview,
  setPreview,
}: ProfilePhotoSelectorProps) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //update the image state
      setImage(file);
      //Generate preview url for the file
      const preview = URL.createObjectURL(file);
      if (setPreview) {
        setPreview(preview);
      }
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);

    if (setPreview) {
      setPreview(null);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="images/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="w-full h-15 flex items-center justify-center bg-purple-50  relative cursor-pointer">
          {/* <User className="text-4xl text-purple-500" /> */}
          <button
            type="button"
            onClick={onChooseFile}
            className="w-8 h-8 flex items-center justify-center bg-linear-to-r from-purple-500/85 to-purple-700 text-white rounded-full  cursor-pointer"
          >
            <Upload
              size={20}
              className="text-white bg-purple-500  rounded-full "
            />
          </button>
        </div>
      ) : (
        <div className="relative bg-amber-800">
          <img
            src={preview || previewUrl}
            alt="profile photo"
            className="w-full h-20 bg-red-900"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="w-8 h-8 flex items-center justify-center bg-red-500  text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
          >
            <Trash2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default TrackPhotoSelector;
