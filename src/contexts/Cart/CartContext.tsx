import { createContext } from 'react'
import { Cart } from '../../models/Card'

export type CartContextType = {
    cart: Cart[];
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    sumCardItems(): number
}

export const CartContext = createContext<CartContextType>(null!)