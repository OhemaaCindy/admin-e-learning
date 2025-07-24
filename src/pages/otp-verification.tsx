import { useMutation } from "@tanstack/react-query";
import { AuthFormWrapper } from "../components/authFormWrapper";
import OtpForm from "../components/opt-form";
import { resendOtp } from "@/services/auth-services";
import toast from "react-hot-toast";

export const Otpverification = () => {
  const { mutate: handleOtpResend } = useMutation({
    mutationFn: resendOtp,
  });

  const handleResend = () => {
    handleOtpResend(),
      {
        onSuccess: () => {
          toast.success("Logout sucessfull");
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      };
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="absolute inset-0 bg-[url('/images/form-bg.png')] bg-cover bg-center bg-no-repeat"></div>

      <div className="absolute inset-0 bg-white opacity-40"></div>

      <div className="relative z-10 max-w-md w-full">
        <AuthFormWrapper
          title="OTP verification"
          description="Enter the verification code we sent to your admin1234@gmail.com"
          text="Didn't recieve the otp?"
          page="Resend Otp"
          href="#"
          otpBtn={
            <div className="flex justify-start items-center gap-4">
              <p className="font-semibold">Didn't recieve the otp?</p>
              <button
                className="text-[#01589A] font-bold"
                onClick={handleResend}
              >
                Resend Otp
              </button>
            </div>
          }
        >
          <OtpForm />
        </AuthFormWrapper>
        ;
      </div>
    </div>
  );
};
