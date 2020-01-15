export default class Card {
  private _index: number;
  private _title: string;
  private _body: string;

  constructor(index: number, title: string, body: string) {
    this.index = index;
    this.title = title;
    this.body = body;
  }

  public get index(): number {
    return this._index;
  }
  public set index(value: number) {
    this._index = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get body(): string {
    return this._body;
  }
  public set body(value: string) {
    this._body = value;
  }

  public render(): string {
    return `<div id="host-${this.index}" class="card-wrapper">
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">${this.title}</h2>
                    </div>
                    <div class="card-body">
                        ${this.body}
                          
                    </div>
                </div>
            </div>`;
  }
}
