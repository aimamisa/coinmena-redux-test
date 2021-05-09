import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Weight</th>
        <th>Availability</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {products.map(product => {
        return (
          <tr key={product.id}>
            <td><a href={"http://amazon.com/" + product.slug} target="_blank" rel="noopener noreferrer">{product.product_name}</a></td>
            <td>{product.weight}</td>
            <td>{product.availability}</td>
            {product.isEditable ?
              <td>
                <Link to={'/product/' + product.slug}>Edit</Link>
              </td> : 
              <td></td>
            }
          </tr>
        );
      })}
    </tbody>
  </table>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
