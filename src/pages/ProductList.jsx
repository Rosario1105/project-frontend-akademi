import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions";



// Página Principal
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

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
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
          <img
            src={product.image_url}
            alt={product.name}
            class="h-full w-full object-contain rounded-md"
          />
        </div>
        <div class="p-4">
          <div class="mb-2 flex items-center justify-between">
            <p class="text-slate-800 text-xl font-semibold">
              {product.name}
            </p>
            <p class="text-cyan-600 text-xl font-semibold">
              ${product.price}
            </p>
          </div>
          <p class="text-slate-600 leading-normal font-light">
            {product.description}
          </p>
          <div className="flex gap-2">
          <button class="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Editar
          </button>
          <button class="rounded-md w-full mt-6 bg-red-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Eliminar
          </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProductList;
