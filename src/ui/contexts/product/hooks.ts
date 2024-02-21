import { useContextSelector } from 'use-context-selector';
import { ProductCTX } from '.';

export function  useListByCtegory() {
    return useContextSelector(ProductCTX, (ctx) => ctx.listByCategory);
}

export function useProducts() {
    return useContextSelector(ProductCTX, (ctx) => ctx.products);
}

export function useLoading() {
    return useContextSelector(ProductCTX, (ctx) => ctx.loading);
}