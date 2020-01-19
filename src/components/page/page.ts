import { Layout } from '../../types/layout';
import { AbstractPage } from './abstract-page';
import { Header } from './header';

export class Page extends AbstractPage {
  private _content: string;

  constructor(layout: Layout, content: string) {
    super(layout);
    this.content = content;
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  public render() {
    return `<div id="container">
                    <div class="content">
                        ${new Header(this.layout).render()}
                        ${this.content}
                    </div>
                </div>`;
  }
}
