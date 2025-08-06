// import type { AddInvoiceFormData } from "@/schemas/invoice-schema";
// import { createInvoice } from "@/services/invoice-services";
// import type { InvoiceResponse } from "@/types/invoices.types";
// import type { AuthErrorRes } from "@/types/types";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useAddInvoice = () => {
//   const queryClient = useQueryClient();
//   return useMutation<InvoiceResponse, AuthErrorRes, AddInvoiceFormData>({
//     mutationFn: createInvoice,
//     onSuccess() {
//       queryClient.invalidateQueries({ queryKey: ["get-all-invoices"] });
//     },
//   });
// };
