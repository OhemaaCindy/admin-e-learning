import { useForm } from "react-hook-form";
import { Button } from "./button";
import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../schemas/auth-schema";
import { useRegisterAdmin } from "../hooks/register-admin.hook";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    // defaultValues: {
    //   firstName: "cindy",
    //   lastName: "Essuman",
    //   email: "cindyessuman05@gmail.com",
    //   password: "Cindy@123",
    //   confirmPassword: "Cindy@123",
    //   contact: "+2330594809966",
    // },
  });

  const { mutate, isPending, error, isError, data } = useRegisterAdmin();

  const onSubmit = async (data: RegistrationFormData) => {
    mutate(data, {
      onSuccess(res) {
        Cookies.set("token", res.token);
        reset();
        toast.success("Admin  created successfully");

        navigate("/otp-verification");
      },
      onError() {
        toast.error("Failed to create account");
      },
    });
  };

  return (
    <div className="space-y-4">
      {isError && error && (
        <ul className="text-rose-500 mt-2 bg-rose-100 border border-rose-500 rounded-lg px-8 py-2 list-disc">
          {error.errors.map((err, index) => (
            <li key={index}>{err.message}</li>
          ))}
        </ul>
      )}

      {data && data.success && (
        <p className="text-green-600 mt-2">{data.message}</p>
      )}
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
