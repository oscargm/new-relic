import { getData } from './api/data.service';
import { mapHostsToVM } from './mappers';
import { App, Host } from './model/index';
import { Layout, LayoutTypes } from './types/layout';
import { layoutUtils } from './utils/layout';
import { renderCards, renderTitle, renderWrapper } from './utils/render';

// let storeApps: App[];
let storeHosts: Host[];
const initialLayout: Layout = LayoutTypes.GRID;

async function init() {
  getData(data => {
    storeHosts = mapHostsToVM(data);
    renderFunctions(initialLayout);
  });
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

const renderFunctions = (layout: Layout) => {
  renderWrapper();
  renderTitle(layout, onChangeLayout);
  renderCards(getBestHosts(storeHosts));
};

const onChangeLayout = event => {
  changeLayoutCss(event.target.checked ? LayoutTypes.LIST : LayoutTypes.GRID);
};

const changeLayoutCss = (layout: Layout) => {
  layoutUtils[layout]();
};

init();
