const initialState = {
  isOpen: false,
  idProduct: 0,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true, idProduct: action.payload };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
