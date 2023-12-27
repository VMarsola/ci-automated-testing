import { ApiStatusEnum } from "../ApiStatusEnum";

export interface IAuthRequest {
  username: string;
  password: string;
}

export interface IAuthResponse {
  status: ApiStatusEnum;
  message: string;
  data: any[];
}