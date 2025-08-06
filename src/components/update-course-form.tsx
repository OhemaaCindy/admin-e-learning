import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./button";

import { ImageUpload } from "./image-upload";
import toast from "react-hot-toast";
import {
  UpdateCourseTypeSchema,
  type UpdateCourseFormData,
} from "@/schemas/course-schema";
import { useUpdateCourse } from "@/hooks/course-hook";
import { useQuery } from "@tanstack/react-query";
import type { SingleCourseResponse } from "@/types/courses.types";
import { singleCourse } from "@/services/courses-services";
import { cn } from "@/lib/utils";
import { allTracks } from "@/services/track-services";
import type { TrackResponse } from "@/types/track.type";

interface AddTrackFormProps {
  closeModal: (state: boolean) => void;
  id: string;
}

const UpdateCourseForm = ({ closeModal, id }: AddTrackFormProps) => {
  const { data } = useQuery<SingleCourseResponse, Error>({
    queryKey: ["get-single-track", id],
    queryFn: () => singleCourse(id as string),
  });

  const details = data?.course;
  // console.log("🚀 ~ UpdateCourseForm ~ details:", details);

  // console.log("🚀 ~ UpdateCourseForm ~ id:", id);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<UpdateCourseFormData>({
    resolver: zodResolver(UpdateCourseTypeSchema),
    defaultValues: {
      title: details?.title || "",
      // track: details?.track || "",

      // Add this to your defaultValues
      description: details?.description || "",
    },
  });

  const { data: tracks } = useQuery<TrackResponse, Error>({
    queryKey: ["get-all-tracks"],
    queryFn: allTracks,
  });

  let trackList = tracks?.tracks || [];

  const selectedImage = watch("image");

  const {
    mutate: updateCourse,
    isPending,
    error,
    isError,
    // data,
  } = useUpdateCourse();

  const onSubmit = async (data: UpdateCourseFormData) => {
    // console.log("🚀 ~ onSubmit ~ data:", data),
    updateCourse(
      // {...data,},
      { id, ...data },
      {
        onSuccess(res) {
          console.log("🚀 ~ onSuccess ~ res:", res);
          reset();
          closeModal(false);
          toast.success("Course updated successfully");
        },
        onError() {
          // console.log("error");
          toast.error("Failed to update Course");
        },
      }
    );
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
          label="Title"
          name="title"
          type="text"
          register={register}
          error={errors.title?.message}
          required
        />

        {/* <InputField
          label="Track"
          name="track"
          type="text"
          register={register}
          error={errors.track?.message}
          required
        /> */}
        <select
          {...register("track")}
          className={cn(
            "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
            "border-gray-300",
            // errors && "border-red-500 bg-red-50"
            errors.track && "border-red-500 bg-red-50"
          )}
        >
          <option value="">Select a track</option>
          {trackList.map((track) =>
            track.courses.map((item) => (
              <option key={item._id} value={track._id}>
                {item.title}
              </option>
            ))
          )}
        </select>
        {errors.track && (
          <p className="text-red-500 text-sm mt-1">{errors.track.message}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Image
            {errors.image && <span className="text-red-500">*</span>}
          </label>
          <ImageUpload
            value={selectedImage}
            onImageSelect={(file) => setValue("image", file)}
            error={errors.image?.message}
            maxSize={5}
            placeholder="Upload course image"
            accept="image/*"
            showPreview={true}
          />
        </div>

        <InputField
          label="Description"
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
              ? "Updating Course..."
              : " Update Course "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourseForm;
