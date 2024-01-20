import { createContext } from 'react'
import { Cart } from '../../models/Card'

export type CartContextType = {
    cart: Cart[];
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

export const CartContext = createContext<CartContextType>(null!)