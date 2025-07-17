import { useMutation } from "@tanstack/react-query";
import {
  forgotPasswordAdmin,
  loginAdmin,
  registerAdmin,
} from "../services/auth-services";
import type {
  AuthErrorRes,
  ForgotPasswordPayloadType,
  ForgotPasswordResponseType,
  LoginPayloadType,
  LoginResponseType,
  RegisterResponse,
  RegisterType,
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
