import { createContext } from 'react'
import { Product } from '../../models/Product'

export type ProductContextType = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductContext = createContext<ProductContextType>(null!)