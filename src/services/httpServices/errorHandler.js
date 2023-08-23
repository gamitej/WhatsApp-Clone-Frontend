import { toast } from "react-hot-toast";

const errorResponse = { message: "", error: true };

export function ErrorHandlerApi(error) {
  console.log(error);

  if (error.code === "ERR_NETWORK") {
    errorResponse.message = "Network error";
    console.log(errorResponse);

    return errorResponse;
  }
  const { response } = error;
  return response.data;
}
