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

interface AddTrackFormProps {
  closeModal: (state: boolean) => void;
}

const UpdateInvoiceForm = ({ closeModal }: AddTrackFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // setValue,
    // watch,
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
  //   const selectedImage = watch("image");

  const {
    mutate: addTrack,
    isPending,
    error,
    isError,
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
      {isError && error && (
        <ul className="text-rose-500 mt-2 bg-rose-100 border border-rose-500 rounded-lg px-8 py-2 list-disc">
          {error.errors.map((err, index) => (
            <li key={index}>{err.message}</li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Select Learner"
          name="name"
          type="text"
          register={register}
          error={errors.name?.message}
          required
        />

        <InputField
          label="Enter Amount"
          name="price"
          type="text"
          register={register}
          error={errors.price?.message}
          required
        />

        <InputField
          label="Due date"
          name="duration"
          type="text"
          register={register}
          error={errors.duration?.message}
          required
        />

        <InputField
          label="Status"
          name="instructor"
          type="text"
          register={register}
          error={errors.instructor?.message}
          required
        />

        <InputField
          label="Payment Details"
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
            {isSubmitting || isPending ? "Update Invoice..." : "Update Invoice"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateInvoiceForm;
