import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { ModalDelete } from "../components/product/ModalDelete";
import ProductCard from "../components/product/ProductCard";

// Página Principal
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const modalOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}

      <ModalDelete modalOpen={modalOpen} />
    </div>
  );
};

export default ProductList;
