import type {
  AddTrackFormData,
  UpdateTrackFormData,
} from "@/schemas/track-schema";
import { createTrack, upateTrack } from "@/services/track-services";
import type { AddTrackResponse, UpdateTrackResponse } from "@/types/track.type";
import type { AuthErrorRes } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTrack = () => {
  const queryClient = useQueryClient();
  return useMutation<AddTrackResponse, AuthErrorRes, AddTrackFormData>({
    // mutationKey: ["get-all-tracks"],
    mutationFn: createTrack,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["get-all-tracks"] });
    },
  });
};

export const useUpdateTrack = () => {
  const queryClient = useQueryClient();
  return useMutation<UpdateTrackResponse, AuthErrorRes, UpdateTrackFormData>({
    // mutationKey: ["get-all-tracks"],
    mutationFn: upateTrack,
    // onSuccess() {
    //   queryClient.invalidateQueries({ queryKey: ["get-all-tracks"] });
    // },
  });
};
