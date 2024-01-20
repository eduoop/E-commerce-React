import { AllProductsContainer } from './styles'
import { ProductCardMain } from '../ProductCardMain';
import { Product } from '../../models/Product';

type Props = {
  products: Product[]
}

export const ListProductsMain = ({ products }: Props) => {

  return (
    <AllProductsContainer>
        {products.map((product) => (
            <ProductCardMain product={product}/>
        ))}
    </AllProductsContainer>
  )
}
