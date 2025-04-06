import React from "react";
import Navbarlist from "../components/product/Navbar";
import { Card, Typography, Button } from "@material-tailwind/react";
import { ModalEdit } from "../components/product/ModalEdit";
import { useSelector, useDispatch } from "react-redux";
import { openModalEdit } from "../redux/actions/modalActions";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const modalOpen = useSelector((state) => state.modal.isOpen);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const product = products.filter((p) => p.id === id)[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbarlist />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Card className="flex flex-col lg:flex-row items-center gap-10 p-6 shadow-lg">
          <div className="w-full lg:w-1/2 h-full">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <Typography variant="h3" color="blue-gray">
              {product.name}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">ID:</span> {product.id}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">Categoría:</span>{" "}
              {product.category}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">Descripción:</span>{" "}
              {product.description}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">Stock:</span> {product.stock}
            </Typography>
            <Typography variant="h4" color="cyan">
              ${product.price}
            </Typography>

            <Button
              onClick={() => dispatch(openModalEdit(product))}
              ripple={false}
              className="bg-cyan-700 text-white hover:bg-cyan-800 transition"
            >
              Editar producto
            </Button>
          </div>
        </Card>
      </div>
      <ModalEdit modalOpen={modalOpen}></ModalEdit>
    </div>
  );
};

export default ProductDetail;
