import type { AddCourseFormData } from "@/schemas/course-schema";
import { createCourse } from "@/services/courses-services";
import type { AddCoursesResponse } from "@/types/courses.types";
import type { AuthErrorRes } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddCourse = () => {
  const queryClient = useQueryClient();
  return useMutation<AddCoursesResponse, AuthErrorRes, AddCourseFormData>({
    mutationFn: createCourse,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["get-all-courses"] });
    },
  });
};
