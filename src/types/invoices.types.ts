export interface AllTrackResponse {
  success: boolean;
  count: number;
  invoices: Invoice[];
}

interface Invoice {
  _id: string;
  learner: Learner | null;
  track: Track;
  amount: number;
  status: string;
  dueDate: Date;
  paystackReference: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  paidAt?: Date;
  paystackTransactionId?: string;
}
interface Learner {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isVerified: boolean;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  contact: string;
  description: string;
  disabled: boolean;
  location: string;
  profileImage?: string;
}

interface Track {
  _id: string;
  admin: string;
  name: string;
  price: number;
  instructor: string;
  duration: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}
