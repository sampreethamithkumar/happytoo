import http from "./httpService";

const apiEndPoint = "/user";

export default function registerUser(email, password) {
  return http.post(apiEndPoint, { email, password });
}
