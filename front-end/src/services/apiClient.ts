import axios, { AxiosRequestConfig } from "axios";
import { redirect } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
});

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
}

export default APIClient;
