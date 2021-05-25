import http from "./httpService";

const apiEndPoint = "/auth";

export default function userLogin(email, password) {
  return http.post(apiEndPoint, { email, password });
}
