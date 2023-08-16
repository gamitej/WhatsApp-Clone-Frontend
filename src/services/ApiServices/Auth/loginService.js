import config from "../../config.js";
import http from "../../httpServices/httpServices";
import { ErrorHandlerApi } from "../../httpServices/errorHandler";

const endpoint = config.baseUrl;

export async function LoginApi(req) {
  try {
    const { data } = await http.post(`${endpoint}/login`, req);
    return data;
  } catch (error) {
    const data = ErrorHandlerApi(error);
    return data;
  }
}

export async function SignUpApi(req) {
  try {
    const { data } = await http.post(`${endpoint}/sign-up`, req);
    return data;
  } catch (error) {
    const data = ErrorHandlerApi(error);
    return data;
  }
}
