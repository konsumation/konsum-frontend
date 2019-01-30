import config from "config";
import { authHeader } from "../_helpers";

export const userService = {
  login,
  logout,
  getAll
};

async function login(username, password) {
  const response = await fetch(`${config.apiUrl}/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const user = await handleResponse(response);
  // login successful if there's a jwt token in the response
  if (user.token) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

async function getAll() {
  return fetch(`${config.apiUrl}/values`, {
    method: "GET",
    headers: authHeader()
  }).then(handleResponse);
}

async function handleResponse(response) {
  const text = await response.text();

  const data = text && JSON.parse(text);
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }

    throw (data && data.message) || response.statusText;
  }

  return data;
}
