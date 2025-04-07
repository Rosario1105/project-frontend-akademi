import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Navbarlist() {
  const [openNav, setOpenNav] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="/products/celulares" className="flex items-center">
          Celulares
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="/products/laptops" className="flex items-center">
          Laptops
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="/products/accesorios" className="flex items-center">
          Accesorios
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="/products/televisores" className="flex items-center">
          Televisores
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="/products/pc" className="flex items-center">
          PC
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="/products/monitores" className="flex items-center">
          Monitores
        </a>
      </Typography>
      <Tooltip content="Material Tailwind" placement="bottom-end">
        <Button
          onClick={() => {
            navigate("/add-product");
          }}
        >
          Agregar producto
        </Button>
      </Tooltip>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Productos Tecnologicos
          </Typography>
        </div>

        <hr className="mb-3 mt-6 hidden w-full lg:block" />
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <div className="hidden lg:block">{navList}</div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
