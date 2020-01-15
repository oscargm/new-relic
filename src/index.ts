import { getData } from './api/data.service';
import { mapAppsToVM, mapHostsToVM } from './mappers';
import { App, Host } from './model/index';
import {
  renderCards,
  renderTitle,
  renderWrapper,
  renderList,
} from './utils/render';
import { LayoutTypes, Layout } from './types/layout';

let storeApps: App[];
let storeHosts: Host[];
let layout: Layout = LayoutTypes.GRID;

async function init() {
  await getData().then(data => {
    storeApps = mapAppsToVM(data);
    storeHosts = mapHostsToVM(data);
  });
  renderFunctions(layout);
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

const renderFunctions = layout => {
  renderWrapper();
  renderTitle(layout, onChangeLayout);
  layout === LayoutTypes.GRID
    ? renderCards(getBestHosts(storeHosts))
    : renderList(getBestHosts(storeHosts));
};

const onChangeLayout = event => {
  console.log(event.target.checked);
  layout = event.target.checked ? LayoutTypes.LIST : LayoutTypes.GRID;
  renderFunctions(layout);
};

init();
