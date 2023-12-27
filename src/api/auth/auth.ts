//arquivo exemplo de chamadas a api. Sempre divididas em suas categorias e ou responsabilidades

import { makeRequest } from "..";
import { IAuthRequest, IAuthResponse } from "./auth.types";

export const login = async (data:IAuthRequest) => {
  const request: GenericRequest<IAuthRequest> = {
    method: "POST",
    url: "/your_backend_endpoint/login",
    data,
  };
  const response = await makeRequest<IAuthRequest, IAuthResponse>(request);
  return response.data;
};
