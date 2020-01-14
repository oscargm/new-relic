import { App } from './app';
import { isArray } from 'util';

export class Host {
  name: string;
  apps: App[];

  constructor(name: string, apps: any[]) {
    this.name = name;
    this.apps = apps;
  }

  //  addApptoHost
  addApp(app: App) {
    this.apps.push(app);
  }

  //  getTopAppsByHost
  getTopApps(): App[] {
    return this.apps.sort((a, b) => (a.apdex > b.apdex ? -1 : 1)).slice(0, 24);
  }

  //  removeAppFromHost
  removeApp(appToDelete: App) {
    this.apps.splice(
      this.apps.findIndex(app => app.name === appToDelete.name),
      1
    );
  }

  getSumOfApdex() {
    return this.apps.reduce((sum, { apdex }) => {
      return sum + parseInt(apdex);
    }, 0);
  }

  createCard(index: number): string {
    return `<div id="host-${index}" class="card-wrapper">
              <div class="card">
                <div class="card-header">
                  <span class="card-title">${this.name}</h2>
                </div>
                <div class="card-body">
                  ${this.getTopApps()
                    .slice(0, 5)
                    .map(
                      app => `<div class="host-app">
                              <span class="apdex">${app.apdex}</span>
                              <span class="name">${app.name}</span>
                              </div>`
                    )
                    .join('')}
                </div>
              </div> 
            </div>`;
  }
}
