import { useContextSelector } from 'use-context-selector';
import { CategoryCTX } from '.';

export function useListCategories() {
    return useContextSelector(CategoryCTX, (ctx) => ctx.list);
}

export function useCategories() {
    return useContextSelector(CategoryCTX, (ctx) => ctx.categories);
}

export function useLoading() {
    return useContextSelector(CategoryCTX, (ctx) => ctx.loading);
}
 