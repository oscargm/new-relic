import { App } from './app';
import { isArray } from 'util';

export class Host {
  name: string;
  apps: App[];

  constructor(name: string, apps: any[]) {
    this.name = name;
    this.apps = apps;
  }

  addApp(app: App) {
    this.apps.push(app);
  }

  getTopApps(): App[] {
    return this.apps.sort((a, b) => (a.apdex > b.apdex ? -1 : 1)).slice(0, 24);
  }
}
