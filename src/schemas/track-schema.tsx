import z from "zod";

export const AddTrackTypeSchema = z.object({
  name: z.string().min(1, "Track name is required"),
  price: z.string().min(1, "Price is required"),
  duration: z.string().min(1, "Duration is required"),
  instructor: z.string().min(1, "Name of instructor is required"),
  description: z.string().min(1, "Description is required"),
  image: z
    .string()
    .min(1, "Image is required")
    .url("Image must be a valid URL"),
});
export type AddTrackFormData = z.infer<typeof AddTrackTypeSchema>;
