import { Layout, LayoutTypes } from "../../types/layout";
import AbstractPage from "./abstract-page";

export default class Header extends AbstractPage {
    constructor(layout:Layout, checkboxId:string) {
        super(layout, checkboxId);
    }
    render() {
        return `<div class="page-header">
                    <div class="title">
                        <span >Apps by host</span>
                    </div>
                    <div class="subtitle">
                        <div class="username">
                            <span>for user averylongemailaddress@companyname.com</span>
                        </div>
                    </div>
                    <div class="list-card-check">
                        <label>${
                            this.layout === LayoutTypes.LIST ? 'Show as an awesome grid': 'Show as list'}
                        </label>
                        <input type="checkbox" ${this.layout === LayoutTypes.LIST ? `checked`: ``}>
                        <span class="checkmark"></span>
                    </div>
                </div>`;
    }
    
}

// <input id="${this.checkboxId}" type="checkbox" ${
//     this.layout === LayoutTypes.LIST
//         ? `checked/><span>Show as an awesome grid</span>`
//         : `/><span>Show as list</span>`
//     }