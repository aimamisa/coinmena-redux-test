import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/premiums/";

export function getPremiums() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
