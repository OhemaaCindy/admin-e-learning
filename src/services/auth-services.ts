import axios from "axios";
import { apiEndpoints } from "../constants/api-endpoints";
import { axiosClient } from "../lib/axios";
import type {
  AuthErrorRes,
  LoginPayloadType,
  LoginResponseType,
  RegisterResponse,
  RegisterType,
} from "../types/types";

export const registerAdmin = async (
  payload: RegisterType
): Promise<RegisterResponse> => {
  try {
    const response = await axiosClient.post<RegisterResponse>(
      apiEndpoints.AUTH.register,
      payload
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Cast and throw structured error for React Query
      throw error.response.data as AuthErrorRes;
    }
    // Unknown error fallback
    throw {
      success: false,
      errors: [{ message: "Something went wrong" }],
    } as AuthErrorRes;
  }
};

export const loginAdmin = async (
  payload: LoginPayloadType
): Promise<LoginResponseType> => {
  try {
    const response = await axiosClient.post<LoginResponseType>(
      apiEndpoints.AUTH.login,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      // Cast and throw structured error for React Query
      throw error.response.data as AuthErrorRes;
    }
    // Unknown error fallback
    throw {
      success: false,
      errors: [{ message: "Something went wrong" }],
    } as AuthErrorRes;
  }
};
