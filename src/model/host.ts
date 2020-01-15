import { App } from './app';

export class Host {
  private _name: string;
  private _apps: App[];

  constructor(name: string, apps: any[]) {
    this._name = name;
    this._apps = apps;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get apps(): App[] {
    return this._apps;
  }

  public set apps(value: App[]) {
    this._apps = value;
  }

  //  addApptoHost
  public addApp(app: App) {
    this._apps.push(app);
  }

  //  removeAppFromHost
  public removeApp(appToDelete: App) {
    this._apps.splice(
      this._apps.findIndex(app => app.name === appToDelete.name),
      1
    );
  }

  //  getTopAppsByHost
  public getTopApps(): App[] {
    return this._apps.sort((a, b) => (a.apdex > b.apdex ? -1 : 1)).slice(0, 24);
  }

  public getSumOfApdex() {
    return this._apps.reduce((sum, { apdex }) => {
      return sum + parseInt(apdex, 10);
    }, 0);
  }
}
