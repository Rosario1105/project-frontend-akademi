import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./pages/ProductList";
import Navbarlist from "./components/product/Navbar";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
