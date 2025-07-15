import axios from "axios";
import { BASEURL } from "../constants/api-endpoints";

export const axiosClient = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


// axiosClient.interceptors.request.use((config)=>{
//     const token = Cookies.get('token')
// })