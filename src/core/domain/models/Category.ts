
class Catergory {
    private _id!: string;
    private _name!: string;
    private _path!: string;
    
    constructor(id?: string, name?: string, path?: string) {
        this._id = id || '';
        this._name = name || '';
        this._path = path || '';
    }
  
    static fromJSON(json: Record<string, unknown>): Catergory {
        const obj = new Catergory();
        
        obj._id = String(json.id)
        obj._name = String(json.name)
        obj._path = String(json.path)
        return obj;
    }


    public get id(): string {
        return this._id;
    }
    
    public get name(): string {
        return this._name;
    }
 
    public get path(): string {
        return this._path;
    }
}

export default Catergory;