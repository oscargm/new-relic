export class App {
  private _name: string;

  private _contributors: string[];

  private _version: string;

  private _apdex: string;

  private _host: string[];

  constructor(
    name: string,
    contributors: string[],
    version: string,
    apdex: string,
    host: string[]
  ) {
    this.name = name;
    this.contributors = contributors;
    this.version = version;
    this.apdex = apdex;
    this.host = host;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get contributors(): string[] {
    return this._contributors;
  }
  public set contributors(value: string[]) {
    this._contributors = value;
  }

  public get version(): string {
    return this._version;
  }

  public set version(value: string) {
    this._version = value;
  }

  public get apdex(): string {
    return this._apdex;
  }

  public set apdex(value: string) {
    this._apdex = value;
  }

  public get host(): string[] {
    return this._host;
  }

  public set host(value: string[]) {
    this._host = value;
  }
}
