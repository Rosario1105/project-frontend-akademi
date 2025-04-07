import React from "react";
import { ProductForm } from "../components/product/ProductForm";
import Navbarlist from "../components/product/Navbar";

const NewProduct = () => {
  return (
    <div>
      <Navbarlist />
      <ProductForm />
    </div>
  );
};

export default NewProduct;
