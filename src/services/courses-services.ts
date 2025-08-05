import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { Course, CoursesResponse } from "@/types/courses.types";
import type { AuthErrorRes } from "@/types/types";
import axios from "axios";

export const allCourses = async (): Promise<Course[]> => {
  try {
    const response = await axiosClient.get<CoursesResponse>(
      apiEndpoints.COURSES.getAllCourses
    );
    return response.data.courses;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as AuthErrorRes;
    }
    throw {
      success: false,
      errors: [{ message: "Something went wrong" }],
    } as AuthErrorRes;
  }
};
