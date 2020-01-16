import { Layout } from "../../types/layout";
import AbstractPage from "./abstract-page";
import Header from "./header";

export default class Page extends AbstractPage {

    private _content: string;

    constructor(layout:Layout, checkboxId:string, content:string) {
        super(layout, checkboxId);
        this.content = content
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    render() {
        return `<div id="container">
                    <div class="content">
                        ${new Header(this.layout, this.checkboxId).render()}
                        ${this.content}
                    </div>
                </div>`;
    }
    
}