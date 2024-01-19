import { useState } from 'react'
import { ProductContext } from "./ProductContext";
import { Cart } from '../../models/Card';

export const ProductProvider = ({ children }: { children: JSX.Element }) => {

    const [cart, setCart] = useState<Cart[]>([])

    return (
        <ProductContext.Provider value={{ cart, setCart }}>
          {children}
        </ProductContext.Provider>
      );
}
