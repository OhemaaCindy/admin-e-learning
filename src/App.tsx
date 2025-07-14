import { createBrowserRouter, RouterProvider } from "react-router";
import { RegistrationPage } from "./pages/register-page";
import { LoginPage } from "./pages/login-page";
import { Otpverification } from "./pages/otp-verification";
import { Requestpasswordreset } from "./pages/request-password-reset-form";
import { ResetPassword } from "./pages/reset-password";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/otp-verification",
      element: <Otpverification />,
    },
    {
      path: "/request-password-reset",
      element: <Requestpasswordreset />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
