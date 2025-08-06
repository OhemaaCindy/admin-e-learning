import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { AddCourseFormData } from "@/schemas/course-schema";
import type {
  AddCoursesResponse,
  Course,
  CoursesResponse,
} from "@/types/courses.types";
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

export const createCourse = async (
  payload: AddCourseFormData
): Promise<AddCoursesResponse> => {
  console.log("🔥 ~ createTrack ~ payload:", payload);

  const { title, image, track, description } = payload;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("track", track);
  formData.append("description", description);
  formData.append("image", image);

  // for (const [key, value] of formData.entries()) {
  //   console.log(`🔥 ${key}:`, value);
  // }

  try {
    const response = await axiosClient.post<AddCoursesResponse>(
      apiEndpoints.COURSES.createCourse,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log("🚀 ~ createCourse ~ response.data:", response.data);
    return response.data;
  } catch (error) {
    // console.log("🚀 ~ createTrack ~ error:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as AuthErrorRes;
    }
    throw {
      success: false,
      errors: [{ message: "Something went wrong" }],
    } as AuthErrorRes;
  }
};

export const deleteCourse = async (
  id: string
): Promise<DeleteTrackResponse> => {
  try {
    const response = await axiosClient.delete<DeleteTrackResponse>(
      apiEndpoints.TRACKS.deleteTrack(id)
    );
    return response.data;
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
