// import { useMutation } from "@tanstack/react-query";
import { AuthFormWrapper } from "../components/authFormWrapper";
import OtpForm from "../components/opt-form";
// import { resendOtp } from "@/services/auth-services";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router";
import { useResendOtpAdmin } from "@/hooks/register-admin.hook";

export const Otpverification = () => {
  const [searchParams] = useSearchParams();
  const emailQuery = searchParams.get("email");
  console.log("🚀 ~ Otpverification ~ emailQuery:", emailQuery);
  const navigate = useNavigate();
  const { mutate: handleOtpResend, isError, error } = useResendOtpAdmin();

  const handleResend = () => {
    handleOtpResend(),
      {
        onSuccess: () => {
          toast.success("Logout sucessfull");

          navigate("/overview");
        },
        onError: (error: any) => {
          toast.error(error.message);
          console.log(error);
        },
      };
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="absolute inset-0 bg-[url('/images/form-bg.png')] bg-cover bg-center bg-no-repeat"></div>

      <div className="absolute inset-0 bg-white opacity-40"></div>

      <div className="relative z-10 max-w-md w-full">
        {isError && error && (
          <ul className="text-rose-500 mt-2 bg-rose-100 border border-rose-500 rounded-lg px-8 py-2 list-disc">
            {error.errors.map((err, index) => (
              <li key={index}>{err.message}</li>
            ))}
          </ul>
        )}
        <AuthFormWrapper
          title="OTP verification"
          descriptionComponent={
            <div>
              <p className="text-gray-600">
                Enter the verification code we sent to your email{" "}
                <span className="text-sky-600">{emailQuery}</span>
              </p>
            </div>
          }
          // description={`rrrrrEnter the verification code we sent to your email ${emailQuery}`}
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
