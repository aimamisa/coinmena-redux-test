import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as budgetActions from "../../redux/actions/budgetActions";
import * as premiumActions from "../../redux/actions/premiumActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class ProductsPage extends React.Component {
  state = {
    redirectToAddProductPage: false
  };

  componentDidMount() {
    const { products, budgets, premiums, actions } = this.props;

    if (products.length === 0) {
      actions.loadProducts().catch(error => {
        alert("Loading products failed" + error);
      });
    }

    if (budgets.length === 0) {
      actions.loadBudgets().catch(error => {
        alert("Loading budgets failed" + error);
      });
    }

    if (premiums.length === 0) {
      actions.loadPremiums().catch(error => {
        alert("Loading premiums failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddProductPage && <Redirect to="/product" />}
        <h2 style={{"margin":"20px 0"}}>Products</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-product"
              onClick={() => this.setState({ redirectToAddProductPage: true })}
            >
              Add Product
            </button>

            <ProductList products={this.props.products} />
          </>
        )}
      </>
    );
  }
}

ProductsPage.propTypes = {
  budgets: PropTypes.array.isRequired,
  premiums: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    products:
      state.budgets.length === 0 || state.premiums.length === 0
        ? []
        : state.products.map(product => {
            return {
              ...product
              // budgetName: state.budgets.find(a => a.id === product.budgetId).name
            };
          }),
    budgets: state.budgets,
    premiums: state.premiums,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch),
      loadBudgets: bindActionCreators(budgetActions.loadBudgets, dispatch),
      loadPremiums: bindActionCreators(premiumActions.loadPremiums, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
