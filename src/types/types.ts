export interface RegisterType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  contact: string;
  isVerified: boolean;
  verificationToken: string;
  verificationTokenExpiresAt: Date;
  _id: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface AuthErrorRes {
  success: boolean;
  errors: AuthError[];
}

export interface AuthError {
  message: string;
}

export interface LoginPayloadType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  contact: string;
  isVerified: boolean;
  verificationToken: string;
  verificationTokenExpiresAt: Date;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
