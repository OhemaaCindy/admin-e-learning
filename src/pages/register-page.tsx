import { AuthFormWrapper } from "../components/authFormWrapper";
import RegistrationForm from "../components/registrationForm";

export const RegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('/images/form-bg.png')] bg-cover bg-center bg-no-repeat  bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="max-w-md w-full">
        <AuthFormWrapper
          title="Admin Sign up"
          description="Create Your Account to Manage and Access the Dashboard Effortlessly."
          text="Already have an account?"
          page="login"
          href="/login"
        >
          <RegistrationForm />
        </AuthFormWrapper>
      </div>
    </div>
  );
};
