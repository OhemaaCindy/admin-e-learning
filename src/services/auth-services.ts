import { apiEndpoints } from "../constants/api-endpoints";
import { axiosClient } from "../lib/axios";
import type { RegisterResponse } from "../types/types";

interface RegisterAdminProps {
  payload: RegisterResponse;
}

export const RegisterAdmin = async ({ payload }: RegisterAdminProps) => {
  try {
    const response = await axiosClient.post(
      apiEndpoints.AUTH.register,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
