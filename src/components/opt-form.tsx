import { useForm } from "react-hook-form";
import { Button } from "./button";
import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../schemas/auth-schema";

const OtpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Registration data:", data);
      alert("Registration successful!");
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      {/* <InputField
        label="First name"
        name="firstName"
        register={register}
        error={errors.firstName?.message}
        required
      /> */}

      {/* <InputField
        label="Last name"
        name="lastName"
        register={register}
        error={errors.lastName?.message}
        required
      /> */}

      {/* <InputField
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
        required
      /> */}

      <InputField
        label="Code"
        name="code"
        type="code"
        placeholder="12345"
        register={register}
        error={errors.password?.message}
        required
      />
      {/* <Link to="/request-password-reset">
        <h1 className="text-[#01589A]">Forgot your password?</h1>
      </Link> */}
      {/* <InputField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
        required
      /> */}

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mb-4 cursor-pointer"
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Verifying..." : "Verify"}
        </Button>
      </div>
    </div>
  );
};

export default OtpForm;
