import config from "../../config.js";
import http from "../../httpServices/httpServices";
import { ErrorHandlerApi } from "../../httpServices/errorHandler";

const endpoint = config.baseUrl;

export async function LoginApi(req) {
  try {
    const { data } = await http.post(`${endpoint}/v1/login`, req);
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}

export async function SignUpApi(req) {
  try {
    const { data } = await http.post(`${endpoint}/v1/register`, req);
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}
