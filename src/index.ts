import { getData } from './api/data.service';
import { mapAppsToVM, mapHostsToVM } from './mappers';
import { App, Host } from './model/index';
import { renderHosts, renderWrapper, renderTitle } from './utils/render';

var apps: App[];
var hosts: Host[];

async function init() {
  await getData().then(data => {
    apps = mapAppsToVM(data);
    hosts = mapHostsToVM(data);
  });
  renderWrapper();
  renderTitle();
  renderHosts(getBestHosts(hosts));
}

function addAppToHosts(app: App) {
  hosts.forEach(host => host.addApp(app));
}

function removeAppFromHosts(app: App) {
  hosts.forEach(host => host.removeApp(app));
}

function getBestHosts(hosts: Host[]) {
  hosts.sort((hostA, hostB) =>
    hostA.getSumOfApdex() > hostB.getSumOfApdex() ? -1 : 1
  );
  return hosts;
}

init();
