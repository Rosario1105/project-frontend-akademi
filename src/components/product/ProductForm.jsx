import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { addProduct } from "../../redux/actions";
import { useDispatch } from "react-redux";

export function SelectDefault() {}

export function ProductForm() {
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
    image_url: "",
  });

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const validateProduct = (product) => {
    const newErrors = {};

    if (!product.id.trim() || +product.id <= 0)
      newErrors.id = "El ID es obligatorio y debe ser mayor a 0.";
    if (!product.name.trim() || product.name.length < 5)
      newErrors.name = "El nombre debe tener al menos 5 caracteres.";
    if (!product.category.trim())
      newErrors.category = "Debe seleccionar una categoría.";
    if (!product.price || isNaN(product.price) || Number(product.price) <= 0)
      newErrors.price = "El precio debe ser mayor a 0.";
    if (!product.stock || isNaN(product.stock) || Number(product.stock) < 0)
      newErrors.stock = "El stock debe ser mayor a 0.";
    if (!product.description.trim() || product.description.length < 10)
      newErrors.description =
        "La descripción debe tener al menos 10 caracteres.";
    if (!product.image_url.trim() || !product.image_url.startsWith("https"))
      newErrors.image_url = "Ingrese una URL válida.";

    return newErrors;
  };

  const onsubmitForm = () => {
    const foundErrors = validateProduct(product);

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    setErrors({});
    console.log("Producto válido:", product);

    dispatch(addProduct(product));
    dispatch(addProduct(product));
    setSuccessModalOpen(true);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4">
        <Button
          className="mt-6"
          onClick={() => {
            navigate("/");
          }}
        >
          Inicio
        </Button>
      </div>
      <div className="flex-grow flex justify-center items-center px-4">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-xl p-6"
        >
          <Typography variant="h4" color="blue-gray">
            Ingrese un nuevo producto
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Por favor complete los datos.
          </Typography>
          <form className="flex flex-col gap-6">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Id del producto
              </Typography>
              <Input
                required
                onChange={(e) => setProduct({ ...product, id: e.target.value })}
                name="id"
                value={product.id}
                minLength={1}
                maxLength={10}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={!!errors.id}
              />
              {errors.id && (
                <Typography variant="small" color="red">
                  {errors.id}
                </Typography>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nombre del producto
              </Typography>
              <Input
                name="name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                required
                minLength={5}
                maxLength={25}
                size="lg"
                placeholder="Iphone 15 Pro Max"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={!!errors.name}
              />
              {errors.name && (
                <Typography variant="small" color="red">
                  {errors.name}
                </Typography>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Categorias
              </Typography>
              <div className="w-72">
                <Select
                  name="cateogry"
                  value={product.category}
                  onChange={(value) =>
                    setProduct({ ...product, category: value })
                  }
                  label="Seleccione una categoria"
                  error={!!errors.category}
                >
                  <Option value="Celular">Celular</Option>
                  <Option value="Televisor">Televisor</Option>
                  <Option value="Laptop">Laptop</Option>
                  <Option value="Accesorios">Accesorios</Option>
                  <Option value="PC">PC</Option>
                </Select>
                {errors.category && (
                  <Typography variant="small" color="red">
                    {errors.category}
                  </Typography>
                )}
              </div>

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Precio
              </Typography>
              <Input
                name="price"
                value={product.price}
                required
                min={1}
                type="number"
                size="lg"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={!!errors.price}
              />
              {errors.price && (
                <Typography variant="small" color="red">
                  {errors.price}
                </Typography>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Stock
              </Typography>
              <Input
                name="stock"
                value={product.stock}
                type="number"
                required
                min={1}
                size="lg"
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })
                }
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={!!errors.stock}
              />
              {errors.stock && (
                <Typography variant="small" color="red">
                  {errors.stock}
                </Typography>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Descripcion del producto
              </Typography>
              <Input
                name="description"
                value={product.description}
                minLength={10}
                maxLength={60}
                required
                size="lg"
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={!!errors.description}
              />
              {errors.description && (
                <Typography variant="small" color="red">
                  {errors.description}
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Imagen
              </Typography>
              <Input
                name="image_url"
                value={product.image_url}
                required
                type="url"
                size="lg"
                onChange={(e) =>
                  setProduct({ ...product, image_url: e.target.value })
                }
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={!!errors.image_url}
              />
              {errors.image_url && (
                <Typography variant="small" color="red">
                  {errors.image_url}
                </Typography>
              )}
            </div>
            <Button className="mt-6" fullWidth onClick={() => onsubmitForm()}>
              Agregar producto
            </Button>
          </form>
        </Card>
      </div>
      <Dialog
        open={successModalOpen}
        handler={() => setSuccessModalOpen(false)}
      >
        <DialogHeader>¡Éxito!</DialogHeader>
        <DialogBody>El producto fue agregado correctamente.</DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              setSuccessModalOpen(false);
              navigate("/");
            }}
          >
            Aceptar
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
