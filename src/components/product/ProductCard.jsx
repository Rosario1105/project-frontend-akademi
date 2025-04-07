import React from "react";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../redux/actions/modalActions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between h-full bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        <div className="h-64 bg-white flex items-center justify-center p-4 border-b border-slate-100">
          <img
            src={product.image_url}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-slate-800 text-lg font-semibold line-clamp-1">
              {product.name}
            </p>
            <p className="text-black-600 text-xl font-semibold">
              ${product.price}
            </p>
          </div>
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                className="w-1/2 bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition-all text-sm"
                type="button"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                Editar
              </button>
              <button
                className="w-1/2 bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition-all text-sm"
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
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all text-sm"
              type="button"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
