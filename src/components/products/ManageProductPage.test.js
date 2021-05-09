import React from "react";
import { mount } from "enzyme";
import { budgets, premiums, newProduct, products } from "../../../tools/mockProductData";
import { ManageProductPage } from "./ManageProductPage";

function render(args) {
  const defaultProps = {
    budgets,
    premiums,
    products,
    history: {},
    saveProduct: jest.fn(),
    loadBudgets: jest.fn(),
    loadPremiums: jest.fn(),
    loadProducts: jest.fn(),
    product: newProduct,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageProductPage {...props} />);
}

it("sets error when attempting to save an empty product_name field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Product name is required.");
});
