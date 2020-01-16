import { Layout} from "../../types/layout";

export default class AbstractPage {
    private _layout: Layout;
    private _checkboxId: string;
    
    constructor(layout:Layout, checkboxId:string) {
        this.layout=layout;
        this.checkboxId = checkboxId;
    }

    public get checkboxId(): string {
        return this._checkboxId;
    }
    public set checkboxId(value: string) {
        this._checkboxId = value;
    }

    public get layout(): Layout {
        return this._layout;
    }
    public set layout(value: Layout) {
        this._layout = value;
    }
}