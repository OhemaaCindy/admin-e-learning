import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  AddTrackTypeSchema,
  type AddTrackFormData,
} from "@/schemas/track-schema";
import type { AddTrackType } from "@/types/track.type";
import TrackPhotoSelector from "./track-picture-uploadSelector";
import { useState } from "react";

const AddTrackForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  // const [preview, setPreview] = useState<string | null>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm<AddTrackFormData>({
    resolver: zodResolver(AddTrackTypeSchema),
    // defaultValues: {
    //   firstName: "cindy",
    //   lastName: "Essuman",
    //   email: "cindyessuman05@gmail.com",
    //   password: "Cindy@123",
    //   confirmPassword: "Cindy@123",
    //   contact: "+2330594809966",
    // },
  });
  const onSubmit = (data: AddTrackFormData) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Track name"
          name="name"
          type="text"
          register={register}
          error={errors.name?.message}
          required
        />

        <InputField
          label="Price"
          name="price"
          type="text"
          register={register}
          error={errors.price?.message}
          required
        />

        <InputField
          label="Duration"
          name="duration"
          type="text"
          register={register}
          error={errors.duration?.message}
          required
        />

        <InputField
          label="Instructor"
          name="instructor"
          type="text"
          register={register}
          error={errors.instructor?.message}
          required
        />
        <TrackPhotoSelector image={profilePic} setImage={setProfilePic} />
        {/* <InputField
          label="Picture"
          name="image"
          type="text"
          register={register}
          error={errors.image?.message}
          required
          placeholder="Choose File"
        /> */}

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
            disabled={isSubmitting}
            className="mb-4 cursor-pointer"
          >
            {isSubmitting ? "Creating Track..." : "Create Track"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTrackForm;
