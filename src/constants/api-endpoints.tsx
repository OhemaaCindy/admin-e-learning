export const BASEURL = "https://tmp-se-projectapi.azurewebsites.net/api";

export const apiEndpoints = {
  baseURL: BASEURL,
  AUTH: {
    register: "/auth/signup/admin",
    login: "/auth/login",
    forgotPassword: "/auth/forgot-password",
    resetPassword: (id: string) => `/auth/reset-password/${id}`,
    verifyEmail: "/auth/verify-email",
    resendVerificationToken: "/auth/resend-token",
    // update-password:"/auth/change-password",
    // logout:"/admin/auth/logout"
    // check-auth:"auth/check-auth"
  },
  TRACKS: {
    getAllTracks: "/tracks",
  },
};
