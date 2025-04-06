import React from "react";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../redux/actions/modalActions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-contain rounded-md"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-slate-800 text-xl font-semibold">
              {product.name}
            </p>
            <p className="text-cyan-600 text-xl font-semibold">
              ${product.price}
            </p>
          </div>
          <p className="text-slate-600 leading-normal font-light">
            {product.description}
          </p>
          <div className="flex gap-2">
            <button
              className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
            >
              Editar
            </button>
            <button
              className="rounded-md w-full mt-6 bg-red-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => dispatch(openModal(product.id))}
            >
              Eliminar
            </button>
          </div>
          <button
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
            className="rounded-md w-full mt-6 bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
