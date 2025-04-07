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

  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsFiltered = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  const totalPages = Math.ceil(productsFiltered.length / itemsPerPage);

  const sortedProducts = useMemo(() => {
    const sorted = [...productsFiltered];
    if (!sortField) return sorted;

    return sorted.sort((a, b) => {
      let fieldA = a[sortField];
      let fieldB = b[sortField];

      if (sortField === "name") {
        fieldA = fieldA.toLowerCase();
        fieldB = fieldB.toLowerCase();
      }

      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [productsFiltered, sortField, sortOrder]);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const noProductsAvailable = productsFiltered.length === 0;

  return (
    <>
      <Navbarlist />

      <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-xl font-semibold">Ordenar por:</h2>
        <div className="flex gap-2">
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
            onClick={() => toggleSort("price")}
          >
            Precio{" "}
            {sortField === "price" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
            onClick={() => toggleSort("name")}
          >
            Nombre{" "}
            {sortField === "name" ? (sortOrder === "asc" ? "A-Z" : "Z-A") : ""}
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {noProductsAvailable ? (
          <div className="text-center text-xl font-semibold text-gray-600">
            No hay productos disponibles
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts
              .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        )}
      </div>
      <ModalDelete modalOpen={modalOpen} />

      {sortedProducts.length > 0 ? (
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
