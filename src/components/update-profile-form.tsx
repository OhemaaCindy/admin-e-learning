import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import {
  AddTrackTypeSchema,
  type AddTrackFormData,
} from "@/schemas/track-schema";
import { ImageUpload } from "./image-upload";
import { useAddTrack } from "@/hooks/add-track.hook";
import toast from "react-hot-toast";

interface AddProfileFormProps {
  closeModal: (state: boolean) => void;
}

const UpdateProfileForm = ({ closeModal }: AddProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<AddTrackFormData>({
    resolver: zodResolver(AddTrackTypeSchema),
    defaultValues: {
      name: "",
      price: "",
      duration: "",
      instructor: "",
      // Add this to your defaultValues
      description: "",
    },
  });
  const selectedImage = watch("image");

  const {
    mutate: addTrack,
    isPending,
    // error,
    // isError,
    // data,
  } = useAddTrack();

  const onSubmit = async (data: AddTrackFormData) => {
    // console.log("🚀 ~ onSubmit ~ data:", data),
    addTrack(data, {
      onSuccess(res) {
        console.log("🚀 ~ onSuccess ~ res:", res);
        reset();
        closeModal(false);
        toast.success("Track created successfully");
      },
      onError() {
        // console.log("error");
        toast.error("Failed to create Track");
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Image
            {errors.image && <span className="text-red-500">*</span>}
          </label> */}
          <ImageUpload
            value={selectedImage}
            onImageSelect={(file) => setValue("image", file)}
            error={errors.image?.message}
            maxSize={5}
            // placeholder="Upload course image"
            accept="image/*"
            showPreview={true}
            profile
          />
        </div>
        <p className="font-semibold">Change Profile Picture</p>
        <div className=" mt-8 w-sm">
          {" "}
          <InputField
            label="First Name"
            name="name"
            type="text"
            register={register}
            error={errors.name?.message}
            required
          />
          <InputField
            label="Last Name"
            name="price"
            type="text"
            register={register}
            error={errors.price?.message}
            required
          />
          <InputField
            label="Change Password"
            name="description"
            type="text"
            register={register}
            error={errors.description?.message}
            required
          />
          <InputField
            label="Confirm Password"
            name="description"
            type="text"
            register={register}
            error={errors.description?.message}
            required
          />
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || isPending}
              className="mb-4 cursor-pointer"
            >
              {isSubmitting || isPending
                ? "Update Profile..."
                : "Update Profile"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
