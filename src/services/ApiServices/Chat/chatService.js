import config from "../../config.js";
import http from "../../httpServices/httpServices";
import { ErrorHandlerApi } from "@/services/httpServices/errorHandler.js";

const endpoint = config.baseUrl;

export async function getChats(id) {
  try {
    const data = await http.get(`${endpoint}/v1/chat/user?userId=${id}`);
    console.log(data);
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}

// UPLOAD PROFILE PIC
export async function UploadProfilePic(req) {
  const { token } = req;
  try {
    const { data } = await http.post(
      `${endpoint}/v1/update/upload-profile-pic`,
      req,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}

// get profile picture
export async function getProfilePicture(id) {
  try {
    const { data } = await http.get(
      `${endpoint}/v1/update/profile-pic?userId=${id}`
    );
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}
