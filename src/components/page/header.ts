import { labels } from '../../consts';
import { Layout, LayoutTypes } from '@types';
import { Checkbox } from '../checkbox';
import { AbstractPage } from './abstract-page';

export class Header extends AbstractPage {
  constructor(layout: Layout) {
    super(layout);
  }
  public render() {
    return `<div class="page-header">
                    <div class="title">
                        <span>${labels.TITLE}</span>
                    </div>
                    <div class="subtitle">
                        <div class="username">
                            <span>for user averylongemailaddress@companyname.com</span>
                        </div>
                    </div>
                    ${new Checkbox(
                      this.layout === LayoutTypes.LIST
                        ? labels.CHECKBOX_GRID
                        : labels.CHECKBOX_LIST,
                      this.layout === LayoutTypes.LIST ? true : false,
                      'list-card-check'
                    ).render()}
                </div>`;
  }
}
