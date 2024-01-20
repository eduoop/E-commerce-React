import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { CartProvider } from "./contexts/Cart/CartProvider.tsx";
import { ProductProvider } from "./contexts/Products/ProductProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>
);
