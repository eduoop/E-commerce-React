import { useState } from 'react'
import { CartContext } from "./CartContext";
import { Cart } from '../../models/Card';

export const CartProvider = ({ children }: { children: JSX.Element }) => {

    const [cart, setCart] = useState<Cart[]>([])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
          {children}
        </CartContext.Provider>
      );
}
