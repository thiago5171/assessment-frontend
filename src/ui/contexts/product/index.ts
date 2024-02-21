import { createContext } from 'use-context-selector';
import Product from '../../../core/domain/models/Product';

interface Props {
    listByCategory(id: number): Promise<void>
    products: Product[] 
    loading: boolean
}

export const ProductCTX = createContext<Props>({} as Props);