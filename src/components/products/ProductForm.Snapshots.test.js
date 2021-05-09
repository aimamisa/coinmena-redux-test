import React from "react";
import ProductForm from "./ProductForm";
import renderer from "react-test-renderer";
import { products, budgets, premiums } from "../../../tools/mockProductData";

it("sets submit button label 'Saving...' when saving is true", () => {
    const tree = renderer.create(
        <ProductForm
        product={products[0]}
        budgets={budgets}
        premiums={premiums}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving
        />
    );

    expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
    const tree = renderer.create(
        <ProductForm
        product={products[0]}
        budgets={budgets}
        premiums={premiums}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving={false}
        />
    );

    expect(tree).toMatchSnapshot();
});
