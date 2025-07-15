import { AuthFormWrapper } from "../components/authFormWrapper";
import OtpForm from "../components/opt-form";

export const Requestpasswordreset = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('/images/form-bg.png')] bg-cover bg-center bg-no-repeat  bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="max-w-md w-full">
        <AuthFormWrapper
          title="OTP verification"
          description="Enter the verification code we sent to your  
          admin1234@gmail.com"
          text="Didn't recieve the otp?"
          page="Resend Otp"
          href="/"
        >
          <OtpForm />
        </AuthFormWrapper>
      </div>
    </div>
  );
};
