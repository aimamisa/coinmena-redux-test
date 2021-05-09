import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import NumberInput from '../common/NumberInput';
import Header from "../common/Header";

const ProductForm = ({
  product,
  budgets,
  premiums,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <>
      <Header />

      <form onSubmit={onSave}>
        <h2>{product.id ? "Edit" : "Add"} Product</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}

        <TextInput
        name="product_name"
        label="Product Name"
        value={product.product_name}
        onChange={onChange}
        error={errors.product_name} />

        <TextInput
        name="weight"
        label="Weight"
        value={product.weight}
        onChange={onChange}
        error={errors.weight} />

        <NumberInput
        name="availability"
        label="Availability"
        value={product.availability.toString()}
        onChange={onChange} />

        <TextInput
        name="url"
        label="Product Url"
        value={product.url}
        onChange={onChange}
        error={errors.url} />

        <fieldset id="group1" style={{"marginBottom":"20px"}}>
          Budget: <input 
          name="price_tier" 
          type="radio"
          value={product.price_range || "budget"}
          onChange={onChange}
          error={errors.price_tier} /> {" "}
          Premium: <input 
          name="price_tier" 
          type="radio" 
          value={product.price_range || "premium"}
          onChange={onChange}
          error={errors.price_tier} />
        </fieldset>

        {
          product.price_tier === "budget" ?
          <SelectInput
          name="price_range"
          label="Product Price Range"
          value={product.price_range || ""}
          defaultOption="Select budget price range..."
          options={budgets.map(budget => ({
            value: budget.id,
            text: budget.name
          }))}
          onChange={onChange}
          error={errors.price_range} /> : 
          <SelectInput
          name="price_range"
          label="Product Price Range"
          value={product.price_range || ""}
          defaultOption="Select premium price range..."
          options={premiums.map(premium => ({
            value: premium.id,
            text: premium.name
          }))}
          onChange={onChange}
          error={errors.price_range} />
        }

        <TextInput
          name="unit_cost"
          label="Unit cost"
          value={product.unit_cost}
          onChange={onChange}
          error={errors.unit_cost}
        />

        <fieldset id="group1" style={{"marginBottom":"20px"}}>
          <label htmlFor="IsEditable">Make Editable?</label>{" "}
          <input 
          name="isEditable" 
          type="checkbox" 
          value={product.isEditable || false} 
          onChange={onChange} />
        </fieldset>

        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </>
  );
};

ProductForm.propTypes = {
  budgets: PropTypes.array.isRequired,
  premiums: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ProductForm;
