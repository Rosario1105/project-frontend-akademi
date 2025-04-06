import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";
import { deleteProduct } from "../../redux/actions";

export function ModalDelete({ modalOpen }) {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.modal.idProduct);

  console.log(productId);

  return (
    <>
      <Dialog open={modalOpen} handler={() => dispatch(closeModal())}>
        <DialogHeader>Desea eliminar este producto?</DialogHeader>
        <DialogBody>
          Esta seguro que desea eliminar el producto seleccionado?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={() => dispatch(closeModal())}
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="red"
            onClick={() => {
              dispatch(deleteProduct(productId));
              dispatch(closeModal());
            }}
          >
            <span>Eliminar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
