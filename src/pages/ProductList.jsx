import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { ModalDelete } from "../components/product/ModalDelete";
import ProductCard from "../components/product/ProductCard";
import { useParams } from "react-router-dom";
import Navbarlist from "../components/product/Navbar";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const modalOpen = useSelector((state) => state.modal.isOpen);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsToShow = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  const noProductsAvailable = productsToShow.length === 0;

  return (
    <>
      <Navbarlist />
      <div className="container mx-auto px-4 py-8">
        {noProductsAvailable ? (
          <div className="text-center text-xl font-semibold text-gray-600">
            No hay productos disponibles
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsToShow.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>

      <ModalDelete modalOpen={modalOpen} />
    </>
  );
};

export default ProductList;
