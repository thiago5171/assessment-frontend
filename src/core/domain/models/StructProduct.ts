import Product from "./Product";

class StructProduct {
    private _items!: Product[];
    private _filters!: Record<string, string>[];

    static fromJSON(json: Record<string, unknown>): StructProduct {
        const obj = new StructProduct();
        obj._items = (json.items as Record<string, unknown>[]).map(Product.fromJSON);
        obj._filters = json.filters as Record<string, string>[];
        return obj;
    }

    get items(): Product[] {
        return this._items;
    }

    get filters(): Record<string, string>[] {
        return this._filters;
    }

    set items(value: Product[]) {
        this._items = value;
    }

    set filters(value: Record<string, string>[]) {
        this._filters = value;
    }
}

export default StructProduct;