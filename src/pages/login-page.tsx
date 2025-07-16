import { AuthFormWrapper } from "../components/authFormWrapper";
import LoginForm from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('/images/form-bg.png')] bg-cover bg-center bg-no-repeat  bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="max-w-md w-full">
        <AuthFormWrapper
          title="Admin Login"
          description="Login to Manage and Access the Dashboard Effortlessly."
          text="Don't have an account?"
          page="Sign Up"
          href="/register"
        >
          <LoginForm />
        </AuthFormWrapper>
      </div>
    </div>
  );
};
