import config from "config";
import { authHeader } from "../_helpers";

export const categoryService = {
  getAll
};

async function getAll() {
  return fetch(`${config.apiUrl}/categories`, {
    method: "GET",
    headers: authHeader()
  }).then(handleResponse);
}

async function handleResponse(response) {
  if (!response.ok) {
    if (response.status === 401) {
      location.reload(true);
    }

    throw (data && data.message) || response.statusText;
  }

  const text = await response.text();
  return text && JSON.parse(text);
}
