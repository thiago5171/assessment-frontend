class Product {
    private _id!: string;
    private _sku!: string;
    private _name!: string;
    private _path!: string;
    private _price!: number;
    private _image!: string;
    private _category!: string;
    private _filter!: Record<string, string>[];

    static fromJSON(json: Record<string, unknown>): Product {

        const obj = new Product();
        obj._id = String(json.id)
        obj._sku = String(json.sku)
        obj._name = String(json.name)
        obj._path = String(json.path)
        obj._price = Number(json.price)
        obj._image = String(json.image)
        obj._category = String(json.category)
        obj._filter =  json.filter as Record<string, string>[];
        return obj;
    }

    public get id(): string {
        return this._id;
    }

    public get sku(): string {
        return this._sku;
    }

    public get name(): string {
        return this._name;
    }

    public get path(): string {
        return this._path;
    }

    public get price(): number {
        return this._price;
    }

    public get image(): string {
        return this._image;
    }

    public get category(): string {
        return this._category;
    }

    public get filter(): Record<string, string>[] {
        return this._filter;
    }


}
export default Product;