import React from "react";
import ProductForm from "./ProductForm";
import { shallow } from "enzyme";

function renderProductForm(args) {
  const defaultProps = {
    budgets: [],
    premiums: [],
    product: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<ProductForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderProductForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Product");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderProductForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderProductForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
