import { createContext } from 'use-context-selector';
import Category from '../../../core/domain/models/Category';

interface Props {
    list(): Promise<void>
    categories: Category[]
    loading: boolean
}

export const CategoryCTX = createContext<Props>({} as Props);