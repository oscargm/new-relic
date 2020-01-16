import { Layout} from "../../types/layout";

export default class AbstractPage {
    private _layout: Layout;
    
    constructor(layout:Layout) {
        this.layout=layout;
    }

    public get layout(): Layout {
        return this._layout;
    }
    public set layout(value: Layout) {
        this._layout = value;
    }
}