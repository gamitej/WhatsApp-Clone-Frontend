import config from "../../config.js";
import http from "../../httpServices/httpServices";

const endpoint = config.baseUrl;

export async function getChats(id) {
  try {
    const data = await http.get(`${endpoint}/v1/chat/user/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    return response.data;
  }
}