import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { AllTrackResponse, Invoice } from "@/types/invoices.types";
import type { AuthErrorRes } from "@/types/types";
import axios from "axios";

export const allInvoice = async (): Promise<Invoice[]> => {
  try {
    const response = await axiosClient.get<AllTrackResponse>(
      apiEndpoints.INVOICES.getAllInvoices
    );
    return response.data.invoices;
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
