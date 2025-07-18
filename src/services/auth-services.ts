import axios from "axios";
import { apiEndpoints } from "../constants/api-endpoints";
import { axiosClient } from "../lib/axios";
import type {
  AuthErrorRes,
  ForgotPasswordPayloadType,
  ForgotPasswordResponseType,
  LoginPayloadType,
  LoginResponseType,
  RegisterResponse,
  RegisterType,
  ResetPasswordPayloadType,
  ResetPasswordResponseype,
  VerifyEmailPayloadType,
  VerifyEmailResponseType,
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

export const forgotPasswordAdmin = async (
  payload: ForgotPasswordPayloadType
): Promise<ForgotPasswordResponseType> => {
  try {
    const response = await axiosClient.post<ForgotPasswordResponseType>(
      apiEndpoints.AUTH.forgotPassword,
      payload
    );
    console.log("🚀 ~ response.data:", response.data);
    console.log(payload);
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

export interface ResetAdminPasswordProps {
  id: string;
  payload: ResetPasswordPayloadType;
}

export const resetAdminPassword = async ({
  payload,
  id,
}: ResetAdminPasswordProps): Promise<ResetPasswordResponseype> => {
  try {
    const response = await axiosClient.post<ResetPasswordResponseype>(
      apiEndpoints.AUTH.resetPassword(id),
      payload
    );
    console.log("🚀 ~ response.data:", response.data);
    console.log(payload);
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

export const verifyEmailOtp = async (
  payload: VerifyEmailPayloadType
): Promise<VerifyEmailResponseType> => {
  try {
    const response = await axiosClient.post<VerifyEmailResponseType>(
      apiEndpoints.AUTH.verifyEmail,
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
