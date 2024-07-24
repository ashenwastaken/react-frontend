import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">${product.price.toFixed(2)}</p>
      <Link to={`/products/${product._id}`} className="btn btn-primary">View</Link>
    </div>
  </div>
);

export default ProductCard;
