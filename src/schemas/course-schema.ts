import z from "zod";

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

export const AddCourseTypeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  track: z.string().min(1, "Please select a track"),
  image: fileSchema, // Required image
  description: z.string().min(1, "Description is required"),
});

export type AddCourseFormData = z.infer<typeof AddCourseTypeSchema>;
