import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/actions";

export function ModalEdit({ modalOpen }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.modal.productToEdit);

  const [productToEdit, setProductToEdit] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setProductToEdit({ ...product });
    }
  }, [product]);

  const validateProduct = (productToEdit) => {
    const newErrors = {};

    if (!productToEdit.name.trim() || productToEdit.name.length < 5)
      newErrors.name = "El nombre debe tener al menos 5 caracteres.";
    if (!productToEdit.category.trim())
      newErrors.category = "Debe seleccionar una categoría.";
    if (
      !productToEdit.price ||
      isNaN(productToEdit.price) ||
      Number(productToEdit.price) <= 0
    )
      newErrors.price = "El precio debe ser mayor a 0.";
    if (
      !productToEdit.stock ||
      isNaN(productToEdit.stock) ||
      Number(productToEdit.stock) < 0
    )
      newErrors.stock = "El stock debe ser mayor a 0.";
    if (
      !productToEdit.description.trim() ||
      productToEdit.description.length < 10
    )
      newErrors.description =
        "La descripción debe tener al menos 10 caracteres.";
    if (
      !productToEdit.image_url.trim() ||
      !productToEdit.image_url.startsWith("https")
    )
      newErrors.image_url = "Ingrese una URL válida.";

    return newErrors;
  };

  const onsubmitForm = () => {
    console.log(productToEdit);
    const foundErrors = validateProduct(product);

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    setErrors({});
    dispatch(updateProduct(productToEdit.id, productToEdit));
    dispatch(closeModal());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Dialog
        open={modalOpen}
        handler={() => {
          dispatch(closeModal());
          setProductToEdit({ ...product });
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Card className="p-10 shadow-lg">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Editar producto
            </Typography>
            <Typography color="gray" className="mb-8">
              Por favor complete los siguientes datos para editar el producto.
            </Typography>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  ID del producto
                </Typography>
                <Input
                  required
                  disabled
                  maxLength={10}
                  type="text"
                  label="ID"
                  value={productToEdit.id}
                  name="id"
                />
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Nombre del producto
                </Typography>
                <Input
                  onChange={(e) =>
                    setProductToEdit({ ...productToEdit, name: e.target.value })
                  }
                  required
                  minLength={5}
                  maxLength={25}
                  label="Nombre"
                  value={productToEdit.name}
                  name="name"
                  error={!!errors.name}
                />
                {errors.name && (
                  <Typography variant="small" color="red">
                    {errors.name}
                  </Typography>
                )}
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Categoría
                </Typography>
                <Select
                  name="categogry"
                  // value={product.category}
                  onChange={(value) =>
                    setProductToEdit({ ...productToEdit, category: value })
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

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Precio
                </Typography>
                <Input
                  onChange={(e) =>
                    setProductToEdit({
                      ...productToEdit,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  min={1}
                  label="Precio"
                  required
                  value={productToEdit.price}
                  name="price"
                  error={!!errors.price}
                />
                {errors.price && (
                  <Typography variant="small" color="red">
                    {errors.price}
                  </Typography>
                )}
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Stock
                </Typography>
                <Input
                  onChange={(e) =>
                    setProductToEdit({
                      ...productToEdit,
                      stock: e.target.value,
                    })
                  }
                  type="number"
                  min={1}
                  label="Stock"
                  required
                  value={productToEdit.stock}
                  name="stock"
                  error={!!errors.stock}
                />
                {errors.stock && (
                  <Typography variant="small" color="red">
                    {errors.stock}
                  </Typography>
                )}
              </div>

              <div className="md:col-span-2">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Descripción
                </Typography>
                <Input
                  onChange={(e) =>
                    setProductToEdit({
                      ...productToEdit,
                      description: e.target.value,
                    })
                  }
                  type="text"
                  label="Descripción"
                  minLength={10}
                  maxLength={60}
                  required
                  value={productToEdit.description}
                  name="description"
                  error={!!errors.description}
                />
                {errors.description && (
                  <Typography variant="small" color="red">
                    {errors.description}
                  </Typography>
                )}
              </div>

              <div className="md:col-span-2">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  URL de imagen
                </Typography>
                <Input
                  onChange={(e) =>
                    setProductToEdit({
                      ...productToEdit,
                      image_url: e.target.value,
                    })
                  }
                  type="url"
                  label="URL de la imagen"
                  required
                  value={productToEdit.image_url}
                  name="image_url"
                  error={!!errors.image_url}
                />
                {errors.image_url && (
                  <Typography variant="small" color="red">
                    {errors.image_url}
                  </Typography>
                )}
              </div>

              <div className="md:col-span-2 flex justify-between">
                <Button
                  type="button"
                  color="gray"
                  onClick={() => {
                    dispatch(closeModal());
                    setProductToEdit({ ...product });
                  }}
                >
                  Cancelar
                </Button>

                <Button type="button" color="cyan" onClick={onsubmitForm}>
                  Editar producto
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Dialog>
    </div>
  );
}
