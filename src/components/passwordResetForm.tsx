import { useForm } from "react-hook-form";
import { Button } from "./button";
import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../schemas/auth-schema";

const PasswordResetForm: React.FC = () => {
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
      <InputField
        label="New Password"
        name="newPassword"
        type="newPassword"
        // placeholder="12345"
        register={register}
        error={errors.password?.message}
        required
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="confirmPassword"
        // placeholder="12345"
        register={register}
        error={errors.password?.message}
        required
      />
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mb-4 cursor-pointer"
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Resetting password..." : "Reset password"}
        </Button>
      </div>
    </div>
  );
};

export default PasswordResetForm;
