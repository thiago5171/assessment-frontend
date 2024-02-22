import { createContext } from 'use-context-selector';
import StructProduct from '../../../core/domain/models/StructProduct';

interface Props {
    listByCategory(id: string): Promise<void>
    products: StructProduct | undefined
    loading: boolean
}

export const ProductCTX = createContext<Props>({} as Props);