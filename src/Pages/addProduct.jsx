// src/Pages/AddProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Slices/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productData.name}
        onChange={(e) => setProductData({ ...productData, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={productData.description}
        onChange={(e) => setProductData({ ...productData, description: e.target.value })}
        placeholder="Description"
      />
      <input
        type="number"
        value={productData.price}
        onChange={(e) => setProductData({ ...productData, price: e.target.value })}
        placeholder="Price"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
