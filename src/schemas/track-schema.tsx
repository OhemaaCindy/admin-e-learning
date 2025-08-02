import z from "zod";

// export const AddTrackTypeSchema = z.object({
//   name: z.string().min(1, "Track name is required"),
//   price: z.string().min(1, "Price is required"),
//   duration: z.string().min(1, "Duration is required"),
//   instructor: z.string().min(1, "Name of instructor is required"),
//   description: z.string().min(1, "Description is required"),
//   image: z
//     .string()
//     .min(1, "Image is required")
//     .url("Image must be a valid URL"),
// });
// export type AddTrackFormData = z.infer<typeof AddTrackTypeSchema>;

const fileSchema = z
  .instanceof(File, { message: "Please upload a file" })
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "File size must be less than 5MB",
  })
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
        file.type
      ),
    {
      message: "Only JPEG, PNG, GIF, and WebP files are allowed",
    }
  );

// export const AddTrackTypeSchema = z.object({
//   name: z.string().min(1, "Track name is required"),
//   price: z.string().min(1, "Price is required"),
//   duration: z.string().min(1, "Duration is required"),
//   instructor: z.string().min(1, "Instructor is required"),
//   image: fileSchema.optional().or(z.literal(null)), // Make optional or required based on your needs
//   // For required image, use: image: fileSchema,
//   description: z.string().min(1, "Description is required"),
// });

// If you want to make the image required, use this instead:
export const AddTrackTypeSchema = z.object({
  name: z.string().min(1, "Track name is required"),
  price: z.number().min(1, "Price is required"),
  duration: z.string().min(1, "Duration is required"),
  instructor: z.string().min(1, "Instructor is required"),
  image: fileSchema, // Required image
  description: z.string().min(1, "Description is required"),
});

export type AddTrackFormData = z.infer<typeof AddTrackTypeSchema>;

export const UpdateTrackTypeSchema = z.object({
  name: z.string().min(1, "Track name is required"),
  price: z.number().min(1, "Price is required"),
  duration: z.string().min(1, "Duration is required"),
  instructor: z.string().min(1, "Instructor is required"),
  image: fileSchema, // Required image
  description: z.string().min(1, "Description is required"),
});

export type UpdateTrackFormData = z.infer<typeof UpdateTrackTypeSchema>;
