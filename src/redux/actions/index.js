import { fetchProductsApi, addProductApi, deleteProductApi, updateProductApi } from "../../../api/productsApi";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";


export const fetchProducts = () => async (dispatch) => {
  const products = await fetchProductsApi();
  dispatch({ type: FETCH_PRODUCTS, payload: products });
};

export const addProduct = (product) => async (dispatch) => {
  const newProduct = await addProductApi(product);
  dispatch({ type: ADD_PRODUCT, payload: newProduct });
};

export const deleteProduct = (id) => async (dispatch) => {
  await deleteProductApi(id);
  dispatch({ type: DELETE_PRODUCT, payload: id });
};

export const updateProduct = (id, product) => async (dispatch) => {
  const updatedProduct = await updateProductApi(id, product);
  dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct });
};
