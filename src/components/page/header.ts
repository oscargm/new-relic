import { Layout, LayoutTypes } from "../../types/layout";
import AbstractPage from "./abstract-page";
import { labels } from "../../consts";

export default class Header extends AbstractPage {
    constructor(layout:Layout) {
        super(layout);
    }
    render() {
        return `<div class="page-header">
                    <div class="title">
                        <span>${labels.TITLE}</span>
                    </div>
                    <div class="subtitle">
                        <div class="username">
                            <span>for user averylongemailaddress@companyname.com</span>
                        </div>
                    </div>
                    <div class="list-card-check">
                        <label>${
                            this.layout === LayoutTypes.LIST ? labels.CHECKBOX_GRID: labels.CHECKBOX_LIST}
                        </label>
                        <input type="checkbox" ${this.layout === LayoutTypes.LIST ? `checked`: ``}>
                        <span class="checkmark"></span>
                    </div>
                </div>`;
    }
}