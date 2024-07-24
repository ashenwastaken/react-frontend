import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navbar from './Components/navbar';
import SignUp from './Pages/signUp';
import Login from './Pages/login';
import Profile from './Pages/profile';
import ProductList from './Pages/productList';
import ProductDetail from './Pages/productDetail';
import AddProduct from './Pages/addProduct';
import EditProduct from './Pages/editProduct';
import ReviewList from './Pages/reviewList';
import AddReview from './Pages/addReview';
import EditReview from './Pages/editReview';
import Footer from './Components/Footer';
import './app.css';

const App = () => (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" exact element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/reviews" exact element={<ReviewList />} />
          <Route path="/reviews/add" element={<AddReview />} />
          <Route path="/reviews/edit/:id" element={<EditReview />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
  
  export default App;