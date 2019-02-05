import axios from "axios";
let paths = {
  login: "/auth/login",
  logout: "/auth/logout",
  csrf_token: "/csrf_token"
};
const client = axios.create({
  baseURL: `/api`,
  withCredentials: true,
  xsrfCookieName: "csrftoken", // TODO DRY Django
  xsrfHeaderName: "X-CSRFToken" // TODO DRY Django
});
// Get CSRF cookie.
client.get(paths.csrf_token);
export default {
  log_in(username, password) {
    return new Promise((resolve, reject) => {
      client
        .post(paths.login, { username, password })
        .then(response => {
          //TODO remove loggin.
          resolve(response.data);
        })
        .catch(err => {
          // TODO handle network error.
          reject(err);
        });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      client
        .post(paths.logout)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
