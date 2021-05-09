import * as types from "./actionTypes";
import * as premiumApi from "../../api/premiumApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPremiumsSuccess(premiums) {
  return { type: types.LOAD_PREMIUMS_SUCCESS, premiums };
}

export function loadPremiums() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return premiumApi
      .getPremiums()
      .then(premiums => {
        dispatch(loadPremiumsSuccess(premiums));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
