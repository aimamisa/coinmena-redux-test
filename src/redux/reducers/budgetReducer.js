import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function budgetReducer(state = initialState.budgets, action) {
  switch (action.type) {
    case types.LOAD_BUDGETS_SUCCESS:
      return action.budgets;
    default:
      return state;
  }
}
