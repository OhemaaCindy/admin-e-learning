export const BASEURL = "https://tmp-se-projectapi.azurewebsites.net/api";

export const apiEndpoints = {
  baseURL: BASEURL,
  AUTH: {
    register: "/auth/signup/admin",
    login: "/auth/login",
    forgotPassword: "/auth/forgot-password",
    // verify-email:"/auth/verify-email",
    // resend-verification-token:"/auth/resend-token",
    // reset-password:(id)=>`/auth/reset-password/${id}`,
    // update-password:"/auth/change-password",
    // logout:"/admin/auth/logout"
    // check-auth:"auth/check-auth"
  },
};
