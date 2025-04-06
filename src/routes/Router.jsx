import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import NewProduct from "../pages/NewProduct";
import ProductDetail from "../pages/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
