import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { SingleTrackResponse, TrackResponse } from "@/types/track.type";
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
    console.log("🚀 ~ singleTrack ~ response:", response);
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
