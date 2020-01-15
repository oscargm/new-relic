import { getData } from './api/data.service';
import { mapAppsToVM, mapHostsToVM } from './mappers';
import { App, Host } from './model/index';
import { renderCards, renderTitle, renderWrapper } from './utils/render';

let storeApps: App[];
let storeHosts: Host[];

async function init() {
  await getData().then(data => {
    storeApps = mapAppsToVM(data);
    storeHosts = mapHostsToVM(data);
  });
  renderWrapper();
  renderTitle();
  renderCards(getBestHosts(storeHosts));
}

function addAppToHosts(app: App) {
  storeHosts.forEach(host => host.addApp(app));
}

function removeAppFromHosts(app: App) {
  storeHosts.forEach(host => host.removeApp(app));
}

function getBestHosts(hosts: Host[]) {
  hosts.sort((hostA, hostB) =>
    hostA.getSumOfApdex() > hostB.getSumOfApdex() ? -1 : 1
  );
  return hosts;
}

init();
