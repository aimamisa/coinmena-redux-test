import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/budgets/";

export function getBudgets() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
