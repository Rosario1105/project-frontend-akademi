import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import NewProduct from "../pages/NewProduct";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-product" element={<NewProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
