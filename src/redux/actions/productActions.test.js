import * as productActions from "./productActions";
import * as types from "./actionTypes";
import { products } from "../../../tools/mockProductData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Products Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_PRODUCTS_SUCCESS when loading products", () => {
      fetchMock.mock("*", {
        body: products,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_PRODUCTS_SUCCESS, products }
      ];

      const store = mockStore({ products: [] });
      return store.dispatch(productActions.loadProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createProductSuccess", () => {
  it("should create a CREATE_PRODUCT_SUCCESS action", () => {
    //arrange
    const product = products[0];
    const expectedAction = {
      type: types.CREATE_PRODUCT_SUCCESS,
      product
    };

    //act
    const action = productActions.createProductSuccess(product);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
