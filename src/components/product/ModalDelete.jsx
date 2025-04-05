import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";

export function ModalDelete({ modalOpen }) {
  const dispatch = useDispatch();

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
            onClick={() => dispatch(closeModal())}
          >
            <span>Eliminar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
