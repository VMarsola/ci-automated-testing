import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// const configs = {
//   baseURL: import.meta.env.VITE_API_URL,
//   timeout: 5000, // Set the request timeout (in milliseconds)
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// };

// const api: AxiosInstance = axios.create();

export async function makeRequest<T, R>(
  request: GenericRequest<T>
): Promise<AxiosResponse<R>> {
  const { method, url, data, needAuth, queries } = request;
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
    params: queries,
  };
  needAuth && (requestConfig.headers = { Authorization: `Bearer ${localStorage.getItem('token')}`});
  const response = await axios(requestConfig);
  return response;
}
