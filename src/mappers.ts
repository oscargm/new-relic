import { App as APIApp } from 'api';
import { App as VMApp, Host as VMHost } from 'model';

export const mapAppsToVM = (apps: APIApp[]): VMApp[] =>
  apps.map(app => mapAppToVM(app));

export const mapAppToVM = (app: APIApp): VMApp =>
  new VMApp(app.name, app.contributors, app.version, app.apdex, app.host);

export const mapHostsToVM = (apps: APIApp[]): VMHost[] => {
  const hosts: VMHost[] = [];
  apps.forEach(app => {
    app.host.forEach(appHost => {
      const hostIndex = hosts.findIndex(host => host.name === appHost);
      if (hostIndex === -1) {
        addHost(hosts, app, appHost);
      }
      if (
        isHostFound(hosts, hostIndex) &&
        !isAppFoundInHost(hosts, hostIndex, app)
      ) {
        addAppToHost(hosts, hostIndex, app);
      }
    });
  });

  return hosts;
};

const addHost = (hosts: VMHost[], app: APIApp, appHost: string) => {
  const hostApps: VMApp[] = [];
  hostApps.push(mapAppToVM(app));
  hosts.push(new VMHost(appHost, hostApps));
};

const isHostFound = (hosts: VMHost[], hostIndex: number): VMHost =>
  hostIndex && hosts[hostIndex];

const isAppFoundInHost = (
  hosts: VMHost[],
  hostIndex: number,
  app: APIApp
): VMApp => hosts[hostIndex].apps.find(hostApp => hostApp.name === app.name);

const addAppToHost = (hosts: VMHost[], hostIndex: number, app: APIApp) =>
  hosts[hostIndex].addApp(mapAppToVM(app));
