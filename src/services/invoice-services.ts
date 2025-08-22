import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { AddInvoiceFormData } from "@/schemas/invoice-schema";

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

  try {
    const response = await axiosClient.post<InvoiceResponse>(
      apiEndpoints.INVOICES.createInvoice,
      payload
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

// export interface UpdateTrackProps {
//   id: string;
//   payload: UpdateTrackFormData;
// }
// export const upateTrack = async ({
//   id,
//   payload,
// }: UpdateTrackProps): Promise<UpdateTrackResponse> => {
//   console.log("🔥 ~ createTrack ~ payload:", payload);

//   const formData = new FormData();

//   // Append only non-empty string values
//   if (payload.name) formData.append("name", payload.name);
//   if (payload.price) formData.append("price", payload.price);
//   if (payload.instructor) formData.append("instructor", payload.instructor);
//   if (payload.duration) formData.append("duration", payload.duration);
//   if (payload.description) formData.append("description", payload.description);

//   // Append image only if it's a File instance
//   if (payload.image instanceof File) {
//     formData.append("image", payload.image);
//   }

//   try {
//     const response = await axiosClient.put<UpdateTrackResponse>(
//       apiEndpoints.TRACKS.updateTrack(id),
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     // console.log("🚀 ~ createTrack ~ error:", error);
//     if (axios.isAxiosError(error) && error.response) {
//       throw error.response.data as AuthErrorRes;
//     }
//     throw {
//       success: false,
//       errors: [{ message: "Something went wrong" }],
//     } as AuthErrorRes;
//   }
// };
