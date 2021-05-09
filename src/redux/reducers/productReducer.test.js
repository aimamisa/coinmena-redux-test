import productReducer from "./productReducer";
import * as actions from "../actions/productActions";

it("should add product when passed CREATE_PRODUCT_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      product_name: "A"
    },
    {
      product_name: "B"
    }
  ];

  const newProduct = {
    product_name: "C"
  };

  const action = actions.createProductSuccess(newProduct);

  // act
  const newState = productReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].product_name).toEqual("A");
  expect(newState[1].product_name).toEqual("B");
  expect(newState[2].product_name).toEqual("C");
});

it("should update product when passed UPDATE_PRODUCT_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, product_name: "A" },
    { id: 2, product_name: "B" },
    { id: 3, product_name: "C" }
  ];

  const product = { id: 2, product_name: "new product name" };
  const action = actions.updateProductSuccess(product);

  // act
  const newState = productReducer(initialState, action);
  const updatedProduct = newState.find(a => a.id == product.id);
  const untouchedProduct = newState.find(a => a.id == 1);

  // assert
  expect(updatedProduct.product_name).toEqual("new product name");
  expect(untouchedProduct.product_name).toEqual("A");
  expect(newState.length).toEqual(3);
});
