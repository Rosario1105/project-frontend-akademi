import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { ModalDelete } from "../components/product/ModalDelete";
import ProductCard from "../components/product/ProductCard";
import { useParams } from "react-router-dom";
import Navbarlist from "../components/product/Navbar";
import { Pagination } from "../components/product/Pagination";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const modalOpen = useSelector((state) => state.modal.isOpen);
  const { category } = useParams();

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsFiltered = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  const totalPages = Math.ceil(productsFiltered.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const start = (activePage - 1) * itemsPerPage;
    return productsFiltered.slice(start, start + itemsPerPage);
  }, [productsFiltered, activePage]);

  const noProductsAvailable = productsFiltered.length === 0;

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
            {paginatedProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
      <ModalDelete modalOpen={modalOpen} />

      {productsFiltered.length > 0 ? (
        <div className="container mx-auto flex justify-center items-center py-8">
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            totalPages={totalPages}
          />
        </div>
      ) : null}
    </>
  );
};

export default ProductList;
