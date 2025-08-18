import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { AddInvoiceFormData } from "@/schemas/invoice-schema";
// import type { AddCoursesResponse } from "@/types/courses.types";
// import type { AddInvoiceFormData } from "@/schemas/invoice-schema";
import type {
  AllTrackResponse,
  Invoice,
  InvoiceResponse,
} from "@/types/invoices.types";
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

export interface CreateInvoiceProps extends AddInvoiceFormData {
  paystackCallbackUrl: string;
}
export const createInvoice = async (
  payload: CreateInvoiceProps
): Promise<InvoiceResponse> => {
  console.log("🔥 ~ createInvoice ~ payload:", payload);

  // for (const [key, value] of formData.entries()) {
  //   console.log(`🔥 ${key}:`, value);
  // }
  try {
    const response = await axiosClient.post<InvoiceResponse>(
      apiEndpoints.INVOICES.createInvoice,
      payload
      // {
      //   headers: { "Content-Type": "multipart/form-data" },
      // }
    );
    console.log("🚀 ~ createInvoice ~ response.data:", response.data);
    return response.data;
  } catch (error) {
    // console.log("🚀 ~ createTrack ~ error:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as AuthErrorRes;
    }
    throw {
      success: false,
      errors: [{ message: "Something went wrong" }],
    } as AuthErrorRes;
  }
};
