import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type {
  AddTrackFormData,
  UpdateTrackFormData,
} from "@/schemas/track-schema";
import type {
  AddTrackResponse,
  DeleteTrackResponse,
  SingleTrackResponse,
  TrackResponse,
  UpdateTrackResponse,
} from "@/types/track.type";
import type { AuthErrorRes } from "@/types/types";
import axios from "axios";

export const allTracks = async (): Promise<TrackResponse> => {
  try {
    const response = await axiosClient.get<TrackResponse>(
      apiEndpoints.TRACKS.getAllTracks
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

export const singleTrack = async (id: string): Promise<SingleTrackResponse> => {
  try {
    const response = await axiosClient.get<SingleTrackResponse>(
      apiEndpoints.TRACKS.getOneTrack(id)
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

export const createTrack = async (
  payload: AddTrackFormData
): Promise<AddTrackResponse> => {
  console.log("🔥 ~ createTrack ~ payload:", payload);

  const { name, price, image, instructor, duration, description } = payload;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("instructor", instructor);
  formData.append("duration", duration);
  formData.append("description", description);
  formData.append("image", image);

  // for (const [key, value] of formData.entries()) {
  //   console.log(`🔥 ${key}:`, value);
  // }

  try {
    const response = await axiosClient.post<AddTrackResponse>(
      apiEndpoints.TRACKS.createTrack,
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
export interface UpdateTrackProps {
  id: string;
  payload: UpdateTrackFormData;
}
export const upateTrack = async ({
  id,
  payload,
}: UpdateTrackProps): Promise<UpdateTrackResponse> => {
  console.log("🔥 ~ createTrack ~ payload:", payload);

  const { name, price, image, instructor, duration, description } = payload;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("instructor", instructor);
  formData.append("duration", duration);
  formData.append("description", description);
  formData.append("image", image);

  Object.entries(payload).forEach(([key, value]) => {
    if (key === "image") {
      if (value instanceof File) {
        formData.append("image", value);
      }
    } else {
      formData.append(key, value as string);
    }
  });

  // for (const [key, value] of formData.entries()) {
  //   console.log(`🔥 ${key}:`, value);
  // }

  try {
    const response = await axiosClient.put<UpdateTrackResponse>(
      apiEndpoints.TRACKS.updateTrack(id),
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

export const deleteTrack = async (id: string): Promise<DeleteTrackResponse> => {
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
