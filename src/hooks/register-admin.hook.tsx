import { useMutation, useQuery } from "@tanstack/react-query";
import {
  checkAuthUser,
  forgotPasswordAdmin,
  loginAdmin,
  logout,
  registerAdmin,
  resetAdminPassword,
  verifyEmailOtp,
  type ResetAdminPasswordProps,
} from "../services/auth-services";
import type {
  AuthErrorRes,
  CheckAuthResponse,
  CheckAuthType,
  ForgotPasswordPayloadType,
  ForgotPasswordResponseType,
  LoginPayloadType,
  LoginResponseType,
  LogoutResponse,
  RegisterResponse,
  RegisterType,
  ResendOtpType,
  ResetPasswordResponseype,
  VerifyEmailPayloadType,
  VerifyEmailResponseType,
} from "../types/types";

export const useRegisterAdmin = () =>
  useMutation<RegisterResponse, AuthErrorRes, RegisterType>({
    mutationFn: (payload) => registerAdmin(payload),
  });

export const useLoginAdmin = () =>
  useMutation<LoginResponseType, AuthErrorRes, LoginPayloadType>({
    mutationFn: (payload) => loginAdmin(payload),
  });

export const useForgotPasswordAdmin = () =>
  useMutation<
    ForgotPasswordResponseType,
    AuthErrorRes,
    ForgotPasswordPayloadType
  >({
    mutationFn: (payload) => {
      console.log(payload);
      return forgotPasswordAdmin(payload);
    },
  });

export const useResetPasswordAdmin = () =>
  useMutation<ResetPasswordResponseype, AuthErrorRes, ResetAdminPasswordProps>({
    mutationFn: ({ payload, id }: ResetAdminPasswordProps) => {
      console.log(payload);
      return resetAdminPassword({ payload, id });
    },
  });

export const useOtpVerifyAdmin = () =>
  useMutation<VerifyEmailResponseType, AuthErrorRes, VerifyEmailPayloadType>({
    mutationFn: (payload) => verifyEmailOtp(payload),
  });

export const useResendOtpAdmin = () =>
  useMutation<ResendOtpType, AuthErrorRes>({
    mutationFn: logout,
  });

export const uselogoutAdmin = () =>
  useMutation<LogoutResponse, AuthErrorRes>({
    mutationFn: logout,
  });
