import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { UpdateLearnerFormData } from "@/schemas/auth-schema";
import type { AuthErrorRes, UpdateLearnerResponse } from "@/types/types";
import axios from "axios";

export const upateAdmin = async (
  payload: UpdateLearnerFormData
): Promise<UpdateLearnerResponse> => {
  console.log("🔥 ~ updateLearner ~ payload:", payload);
  // const { firstName, lastName, contact, location, disabled, descripton } = payload;

  const formData = new FormData();

  // Append only non-empty string values
  if (payload.firstName) formData.append("firstName", payload.firstName);
  if (payload.lastName) formData.append("lastName", payload.lastName);
  if (payload.contact) formData.append("contact", payload.contact);
  if (payload.location) formData.append("location", payload.location);
  formData.append("disabled", String(payload.disabled));
  if (payload.description) formData.append("description", payload.description);

  // formData.append("descripton", payload.description);

  // Append image only if it's a File instance
  if (payload.profileImage instanceof File) {
    formData.append("profileImage", payload.profileImage);
  }
  console.log("🚀 ~ upateLearner ~ formData:", formData);

  try {
    console.log("🚀 ~ upateLearner ~ formData:", formData);
    const response = await axiosClient.put<UpdateLearnerResponse>(
      apiEndpoints.AUTH.updateProfile,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
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
