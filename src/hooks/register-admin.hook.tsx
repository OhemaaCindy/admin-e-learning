import { useMutation } from "@tanstack/react-query";
import { RegisterAdmin } from "../services/auth-services";
import type {
  AuthErrorRes,
  RegisterResponse,
  RegisterType,
} from "../types/types";

export const useRegisterAdmin = () =>
  useMutation<RegisterResponse, AuthErrorRes, RegisterType>({
    mutationFn: (payload) => RegisterAdmin(payload),
  });
