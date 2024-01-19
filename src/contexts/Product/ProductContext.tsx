import { createContext } from 'react'
import { Cart } from '../../models/Card'

export type ProductContextType = {
    cart: Cart[];
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

export const ProductContext = createContext<ProductContextType>(null!)