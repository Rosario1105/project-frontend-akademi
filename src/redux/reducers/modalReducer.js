const initialState = {
  isOpen: false,
  idProduct: 0,
  productToEdit: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true, idProduct: action.payload };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    case "OPEN_MODAL_EDIT":
      return { ...state, productToEdit: action.payload, isOpen: true };
    default:
      return state;
  }
};

export default modalReducer;
