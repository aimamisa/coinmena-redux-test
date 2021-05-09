import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadProducts, saveProduct } from "../../redux/actions/productActions";
import { loadBudgets } from "../../redux/actions/budgetActions";
import { loadPremiums } from "../../redux/actions/premiumActions";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";
import { newProduct } from "../../../tools/mockProductData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageProductPage({
  products,
  budgets,
  premiums,
  loadBudgets,
  loadPremiums,
  loadProducts,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      loadProducts().catch(error => {
        alert("Loading products failed" + error);
      });
    } else {
      setProduct({ ...props.product });
    }

    if (budgets.length === 0) {
      loadBudgets().catch(error => {
        alert("Loading budgets failed" + error);
      });
    }

    if (premiums.length === 0) {
      loadPremiums().catch(error => {
        alert("Loading premiums failed" + error);
      });
    }
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === "budgetId" || name === "premiumId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { 
      product_name, 
      weight, 
      url, 
      price_tier, 
      price_range, 
      unit_cost
    } = product;
    const errors = {};

    if (!product_name) errors.product_name = "Product name is required.";
    if (!weight) errors.weight = "Weight is required.";
    if (!url) errors.url = "Url is required.";
    if (!price_tier) errors.price_tier = "Price tier is required.";
    if (!price_range) errors.price_range = "Price range is required.";
    if (!unit_cost) errors.unit_cost = "Unit cost is required.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveProduct(product)
      .then(() => {
        toast.success("Product saved.");
        history.push("/");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return budgets.length === 0 || premiums.length === 0 || products.length === 0 ? (
    <Spinner />
  ) : (
    <ProductForm
      product={product}
      errors={errors}
      budgets={budgets}
      premiums={premiums}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  budgets: PropTypes.array.isRequired,
  premiums: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  loadProducts: PropTypes.func.isRequired,
  loadBudgets: PropTypes.func.isRequired,
  loadPremiums: PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getProductBySlug(products, slug) {
  return products.find(product => product.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const product =
    slug && state.products.length > 0
      ? getProductBySlug(state.products, slug)
      : newProduct;
  return {
    product,
    products: state.products,
    budgets: state.budgets,
    premiums: state.premiums
  };
}

const mapDispatchToProps = {
  loadProducts,
  loadBudgets,
  loadPremiums,
  saveProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProductPage);
