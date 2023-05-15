import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import User from "../entities/User";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  // headers: {
  //   Authorization: localStorage.getItem("x-auth-token"),
  //   jake: "pota",
  // },
});

axiosInstance.defaults.headers.common["Authorization"] =
  localStorage.getItem("x-auth-token");

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllBooks = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);

  getBook = (slug: string) =>
    axiosInstance.get<T>(this.endpoint + "/" + slug).then((res) => res.data);

  getNewBooks = () =>
    axiosInstance.get<T>(`${this.endpoint}/new-books`).then((res) => res.data);

  addUser = (user: User) =>
    axiosInstance.post<T>(this.endpoint, user).then((res) => {
      localStorage.setItem("x-auth-token", res.headers["x-auth-token"]);
      axiosInstance.defaults.headers.common["Authorization"] =
        localStorage.getItem("x-auth-token");
      return res.data;
    });

  authUser = (user: User) =>
    axiosInstance.post<T>(this.endpoint, user).then((res) => {
      localStorage.setItem("x-auth-token", res.headers["x-auth-token"]);
      axiosInstance.defaults.headers.common["Authorization"] =
        localStorage.getItem("x-auth-token");
      return res.data;
    });
}

export default APIClient;
