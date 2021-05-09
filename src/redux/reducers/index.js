import { combineReducers } from "redux";
import products from "./productReducer";
import budgets from "./budgetReducer";
import premiums from "./premiumReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  products,
  budgets,
  premiums,
  apiCallsInProgress
});

export default rootReducer;
