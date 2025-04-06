import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

import { useNavigate } from "react-router";

export function SelectDefault() {}
export function ProductForm() {
  let navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Button
        className="mt-6"
        onClick={() => {
          navigate("/");
        }}
      >
        Inicio
      </Button>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Ingrese un nuevo producto
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Por favor complete los datos.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Id del producto
            </Typography>
            <Input
              required
              minLength={1}
              maxLength={10}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nombre del producto
            </Typography>
            <Input
              required
              minLength={5}
              maxLength={25}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Categorias
            </Typography>
            <div className="w-72">
              <Select label="Seleccione una categoria">
                <Option>Celular</Option>
                <Option>Televisor</Option>
                <Option>Laptop</Option>
                <Option>Accesorios</Option>
                <Option>PC</Option>
              </Select>
            </div>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Precio
            </Typography>
            <Input
              required
              min={1}
              type="number"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Stock
            </Typography>
            <Input
              type="number"
              required
              min={1}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Descripcion del producto
            </Typography>
            <Input
              minLength={10}
              maxLength={60}
              required
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Imagen
            </Typography>
            <Input
              required
              type="url"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth>
            Agregar producto
          </Button>
        </form>
      </Card>
    </div>
  );
}
