import axios from "axios";

const API_URL = "http://localhost:5000/products";

export const fetchProductsApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProductApi = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const deleteProductApi = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateProductApi = async (id, product) => {
  const response = await axios.put(`${API_URL}/${id}`, product);
  return response.data;
};
