import { App as APIApp } from './api/app';
import { App as VMApp, Host as VMHost } from './model/index';

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
        console.log('hola');
        const hostApps: VMApp[] = [];
        hostApps.push(mapAppToVM(app));
        hosts.push(new VMHost(appHost, hostApps));
      }
      if (
        hostIndex &&
        hosts[hostIndex] &&
        !hosts[hostIndex].apps.find(hostApp => hostApp.name === app.name)
      ) {
        hosts[hostIndex].addApp(mapAppToVM(app));
      }
    });
  });
  console.log(hosts);

  return hosts;
};
