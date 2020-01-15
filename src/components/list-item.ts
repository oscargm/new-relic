export class ListItem {
  private _name: string;
  private _score: string;

  constructor(name: string, score: string) {
    this.name = name;
    this.score = score;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get score(): string {
    return this._score;
  }

  public set score(value: string) {
    this._score = value;
  }
  public render(): string {
    return `<div class="host-app">
                <div class="apdex-wrapper">
                  <span class="apdex">${this.score}</span>
                </div>
                <div class="appname-wrapper">
                    <span class="name">${this.name}</span>
                </div>
            </div>`;
  }
}
