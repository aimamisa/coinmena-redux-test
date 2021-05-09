import * as types from "./actionTypes";
import * as budgetApi from "../../api/budgetApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBudgetsSuccess(budgets) {
  return { type: types.LOAD_BUDGETS_SUCCESS, budgets };
}

export function loadBudgets() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return budgetApi
      .getBudgets()
      .then(budgets => {
        dispatch(loadBudgetsSuccess(budgets));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
