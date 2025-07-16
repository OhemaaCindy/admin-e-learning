import { useMutation } from "@tanstack/react-query";
import { loginAdmin, registerAdmin } from "../services/auth-services";
import type {
  AuthErrorRes,
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
