import config from "../../config.js";
import http from "../../httpServices/httpServices";
import { ErrorHandlerApi } from "../../httpServices/errorHandler";
import { ConnectedTvOutlined } from "@mui/icons-material";

const endpoint = config.baseUrl;

export async function LoginApi(req) {
  try {
    const { data } = await http.post(`${endpoint}/v1/login`, req);
    return data;
  } catch (error) {
    const { response } = error;
    return response.data;
  }
}

export async function SignUpApi(req) {
  try {
    const { data } = await http.post(`${endpoint}/v1/register`, req);
    return data;
  } catch (error) {
    const { response } = error;
    return response.data;
  }
}
