import {
  registrationSchema,
  type RegistrationFormData,
} from "@/schemas/auth-schema";
import { InputField } from "./inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const AddTrackForm = () => {
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

  return (
    <div>
      <form>
        <InputField
          label="Track name"
          name="firstName"
          type="text"
          register={register}
          error={errors.firstName?.message}
          required
        />

        <InputField
          label="Price"
          name="lastName"
          type="text"
          register={register}
          error={errors.lastName?.message}
          required
        />

        <InputField
          label="Duration"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message}
          required
        />

        <InputField
          label="Instructor"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
          required
        />

        <InputField
          label="Picture"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          required
        />

        <InputField
          label="Description"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          required
        />

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mb-4 cursor-pointer"
          >
            {isSubmitting ? "Creating Track..." : "Create Track"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTrackForm;
