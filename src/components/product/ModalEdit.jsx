import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Dialog,
} from "@material-tailwind/react";
import { closeModal } from "../../redux/actions/modalActions";
import { useDispatch } from "react-redux";

export function ModalEdit({ modalOpen }) {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100">
      <Dialog open={modalOpen} handler={() => dispatch(closeModal())}>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Card className="p-10 shadow-lg">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Ingrese un nuevo producto
            </Typography>
            <Typography color="gray" className="mb-8">
              Por favor complete los siguientes datos para agregar un producto.
            </Typography>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  ID del producto
                </Typography>
                <Input required maxLength={10} type="text" label="ID" />
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Nombre del producto
                </Typography>
                <Input required minLength={5} maxLength={25} label="Nombre" />
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Categoría
                </Typography>
                <Select label="Seleccione una categoría">
                  <Option>Celular</Option>
                  <Option>Televisor</Option>
                  <Option>Laptop</Option>
                  <Option>Accesorios</Option>
                  <Option>PC</Option>
                </Select>
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Precio
                </Typography>
                <Input type="number" min={1} label="Precio" required />
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Stock
                </Typography>
                <Input type="number" min={1} label="Stock" required />
              </div>

              <div className="md:col-span-2">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Descripción
                </Typography>
                <Input
                  type="text"
                  label="Descripción"
                  minLength={10}
                  maxLength={60}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  URL de imagen
                </Typography>
                <Input type="url" label="URL de la imagen" required />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <Button type="submit" color="cyan">
                  Agregar producto
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Dialog>
    </div>
  );
}
