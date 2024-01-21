import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Cart } from "../../models/Card";

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  function sumCardItems(): number {
    return cart.reduce((total, item) => {
        const discountedPrice = item.price - (item.price * item.discount);
        return total + (discountedPrice * item.quantity);
    }, 0);
}

  const increaseQuantity = (productId: number) => {
    setCart((oldItems) => {
      const updatedCart = oldItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return updatedCart;
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCart((oldItems) => {
      const updatedCart = oldItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((oldItems) => oldItems.filter(item => item.id !== productId));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, decreaseQuantity, increaseQuantity, removeFromCart, sumCardItems }}>
      {children}
    </CartContext.Provider>
  );
};
