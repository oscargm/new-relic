export class Checkbox {
  private _label: string;
  private _checked: boolean;
  private _classname: string;

  constructor(
    label: string,
    checked: boolean = false,
    classname: string = null
  ) {
    this.label = label;
    this.checked = checked;
    this.classname = classname;
  }

  public get label(): string {
    return this._label;
  }
  public set label(value: string) {
    this._label = value;
  }

  public get checked(): boolean {
    return this._checked;
  }
  public set checked(value: boolean) {
    this._checked = value;
  }

  public get classname(): string {
    return this._classname;
  }
  public set classname(value: string) {
    this._classname = value;
  }

  public render() {
    return `<div class="${this.classname}">
              <label>${this.label}</label>
              <input type="checkbox" ${this.checked ? `checked` : ``}>
              <span class="checkmark"></span>
            </div>`;
  }
}
