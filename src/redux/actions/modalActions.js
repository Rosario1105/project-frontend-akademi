export const openModal = (id) => ({ type: "OPEN_MODAL", payload: id });
export const openModalEdit = (product) => ({
  type: "OPEN_MODAL_EDIT",
  payload: product,
});
export const closeModal = () => ({ type: "CLOSE_MODAL" });
