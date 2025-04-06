import React from "react";
import Navbarlist from "../components/product/Navbar";
import { Card, Typography, Button } from "@material-tailwind/react";
import { ModalEdit } from "../components/product/ModalEdit";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../redux/actions/modalActions";

const ProductDetail = () => {
  const modalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  // Ejemplo de producto por si no recibís props todavía
  const mockProduct = {
    name: "Apple AirPods",
    id: 123,
    category: "Auriculares",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    stock: 25,
    price: 95.0,
    image_url:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
  };

  const data = mockProduct;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbarlist />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Card className="flex flex-col lg:flex-row items-center gap-10 p-6 shadow-lg">
          {/* Imagen */}
          <div className="w-full lg:w-1/2 h-full">
            <img
              src={data.image_url}
              alt={data.name}
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Detalles */}
          <div className="w-full lg:w-1/2 space-y-4">
            <Typography variant="h3" color="blue-gray">
              {data.name}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">ID:</span> {data.id}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">Categoría:</span> {data.category}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">Descripción:</span>{" "}
              {data.description}
            </Typography>
            <Typography color="gray" className="text-lg">
              <span className="font-semibold">Stock:</span> {data.stock}
            </Typography>
            <Typography variant="h4" color="cyan">
              ${data.price}
            </Typography>

            <Button
              onClick={() => dispatch(openModal())}
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
