import { createContext } from 'react'
import { Product } from '../../models/Product'

export type ProductContextType = {
    products: Product[]
}

export const ProductContext = createContext<ProductContextType>(null!)