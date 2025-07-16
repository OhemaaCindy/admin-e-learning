import axios from "axios";
import { apiEndpoints } from "../constants/api-endpoints";
import { axiosClient } from "../lib/axios";
import type { RegisterResponse, RegisterType } from "../types/types";

interface RegisterAdminProps {
  payload: RegisterType;
}

export const RegisterAdmin = async ({
  payload,
}: RegisterAdminProps): Promise<RegisterResponse> => {
  try {
    const response = await axiosClient.post<RegisterResponse>(
      apiEndpoints.AUTH.register,
      payload
    );

    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.errors[0].message);
    } else throw new Error("Failed to create account");
  }
};
