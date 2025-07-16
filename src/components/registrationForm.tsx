import { useForm } from "react-hook-form";
import { Button } from "./button";
import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../schemas/auth-schema";
import { useMutation } from "@tanstack/react-query";
import { RegisterAdmin } from "../services/auth-services";
import toast from "react-hot-toast";

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const { mutate: AddUser, isPending } = useMutation({
    mutationFn: RegisterAdmin,
  });

  const onSubmit = async (data: RegistrationFormData) => {
    console.log(data);

    AddUser(
      { payload: data },
      {
        onSuccess: () => {
          toast.success("Admin  created successfully");
          reset();
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="First name"
          name="firstName"
          type="text"
          register={register}
          error={errors.firstName?.message}
          required
        />

        <InputField
          label="Last name"
          name="lastName"
          type="text"
          register={register}
          error={errors.lastName?.message}
          required
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message}
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
          required
        />

        <InputField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          required
        />

        <InputField
          label="Contact"
          name="contact"
          type="text"
          register={register}
          error={errors.contact?.message}
          required
        />

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting || isPending}
            className="mb-4 cursor-pointer"
          >
            {isSubmitting || isPending ? "Signing up..." : "Sign up"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
