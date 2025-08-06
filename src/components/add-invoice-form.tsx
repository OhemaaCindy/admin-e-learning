import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { useQuery } from "@tanstack/react-query";
import type { Learner } from "@/types/learners.type";
import { allLearners } from "@/services/learner-services";
import {
  AddInvoiceTypeSchema,
  type AddInvoiceFormData,
} from "@/schemas/invoice-schema";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
// import { createInvoice } from "@/services/invoice-services";

interface AddInvoiceFormProps {
  closeModal: (state: boolean) => void;
}

const AddInvoiceForm = ({ closeModal }: AddInvoiceFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
    // setValue,
    watch,
  } = useForm<AddInvoiceFormData>({
    resolver: zodResolver(AddInvoiceTypeSchema),
    // defaultValues: {
    //   name: "",
    //   price: "",
    //   duration: "",
    //   instructor: "",
    //   // Add this to your defaultValues
    //   description: "",
    // },
  });

  const id = watch("learner");
  console.log("Selected ID:", id);

  const {
    data: learnerDetails,
    isLoading: isloadingLearners,
    // isError,
    // error,
  } = useQuery<Learner[], Error>({
    queryKey: ["get-all-learners"],
    queryFn: allLearners,
  });
  const learners = learnerDetails || [];

  const onSubmit = (data: AddInvoiceFormData) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  // const {
  //   mutate: addInvoice,

  // } = createInvoice;

  // const onSubmit = async (data: AddInvoiceFormData) => {
  //   console.log("🚀 ~ onSubmit ~ data:", data),
  //   addInvoice(data, {
  //     onSuccess(res) {
  //       console.log("🚀 ~ onSuccess ~ res:", res);
  //       reset();
  //       closeModal(false);
  //       toast.success("Invoice created successfully");
  //     },
  //     onError() {
  //       // console.log("error");
  //       toast.error("Failed to create Invoice");
  //     },
  //   });
  // };

  return (
    <div>
      {/* {isError && error && (
        <ul className="text-rose-500 mt-2 bg-rose-100 border border-rose-500 rounded-lg px-8 py-2 list-disc">
          {error.errors.map((err, index) => (
            <li key={index}>{err.message}</li>
          ))}
        </ul>
      )} */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {isloadingLearners && <span>Loading.....</span>}

        <select
          {...register("learner")}
          className={cn(
            "w-full px-3 py-2 border rounded-md shadow-sm",
            errors.learner && "border-red-500 bg-red-50"
          )}
        >
          <option value="">Select a learner</option>
          {learners?.map((learner) => (
            <option key={learner._id} value={learner._id}>
              {`${learner.firstName} ${learner.lastName}`}
            </option>
          ))}
        </select>
        {errors.learner && (
          <p className="text-red-500 text-sm mt-1">{errors.learner.message}</p>
        )}

        <InputField
          label="Enter Amount"
          name="amount"
          type="number"
          register={register}
          error={errors.amount?.message}
          required
        />

        <InputField
          label="Due date"
          name="dueDate"
          type="text"
          register={register}
          error={errors.dueDate?.message}
          required
        />

        {/* <InputField
          label="Status"
          name="status"
          type="text"
          register={register}
          error={errors.status?.message}
          required
        /> */}

        <InputField
          label="Payment Details"
          name="paymentDetails"
          type="text"
          register={register}
          error={errors.paymentDetails?.message}
          required
        />

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mb-4 cursor-pointer"
          >
            {isSubmitting ? "Creating Invoice..." : "Create Invoice"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddInvoiceForm;
