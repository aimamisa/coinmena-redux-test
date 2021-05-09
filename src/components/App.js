import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ProductsPage from "./products/ProductsPage";
import ManageProductPage from "./products/ManageProductPage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/product/:slug" component={ManageProductPage} />
        <Route path="/product" component={ManageProductPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
