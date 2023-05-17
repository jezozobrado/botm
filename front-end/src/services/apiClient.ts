import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import User from "../entities/User";
import { Book } from "../entities/Book";
import { ObjectId } from "bson";
import { Params } from "../components/CartItem";

export interface CartRequest {
  book: Book;
  customer?: ObjectId | string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
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
      console.log("Authenticating...");

      return res.data;
    });

  addToCart = (cartRequest: CartRequest) =>
    axiosInstance.post<T>(this.endpoint, cartRequest).then((res) => res.data);

  getCartItems = (customer?: ObjectId | string) =>
    axiosInstance
      .get<T>(this.endpoint + "/" + customer)
      .then((res) => res.data);

  removeCartItem = (params: Params) =>
    axiosInstance
      .post<T>(this.endpoint + "/" + params.user + "/" + params.book)
      .then((res) => {
        console.log("params", params);
        return res.data;
      });
}

export default APIClient;
