import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function premiumReducer(state = initialState.premiums, action) {
  switch (action.type) {
    case types.LOAD_PREMIUMS_SUCCESS:
      return action.premiums;
    default:
      return state;
  }
}
