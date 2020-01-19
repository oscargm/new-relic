import { getData } from '@api';
import { Page } from '@components';
import { App, Host } from '@model';
import { Layout, LayoutTypes } from '@types';
import { mapHostsToVM } from './mappers';
import { layoutUtils, renderHostCard, updateCheckbox } from './utils';

// let storeApps: App[];
let storeHosts: Host[];
const defaultLayout: Layout = LayoutTypes.GRID;

function init() {
  getData(data => {
    storeHosts = mapHostsToVM(data);
    renderFunctions(defaultLayout);
    document.querySelector('.checkmark').addEventListener('click', () => {
      updateCheckbox();
      onChangeLayout();
    });
  });
}

function addAppToHosts(app: App) {
  storeHosts.forEach(host => host.addApp(app));
}

function removeAppFromHosts(app: App) {
  storeHosts.forEach(host => host.removeApp(app));
}

function getTopAppsByHost(hostname: string) {
  storeHosts
    .filter(host => host.name === hostname)
    .map(host => host.getTopApps());
}

function getBestHosts(hosts: Host[]) {
  hosts.sort((hostA, hostB) =>
    hostA.getSumOfApdex() > hostB.getSumOfApdex() ? -1 : 1
  );
  return hosts;
}

const renderFunctions = (layout: Layout) => {
  const content = `<div class="hosts-wrapper">
                  ${getBestHosts(storeHosts)
                    .map(
                      (host, i) =>
                        `${i % 2 === 1 ? '<div style="width:30px"></div>' : ''}
                        ${renderHostCard(host, i)}`
                    )
                    .join('')}
                  </div>`;
  /*
    Above condition:
    ${i % 2 === 1 ? '<div style="width:30px"></div>' : ''}
    is used to add an empty element (separator) before even elements
    and copy flexbox justify-content: space-evenly behaviour
    when rendered as list, this remains invisible as it has no height
    could be done better but this was a fast and working solution
  */
  document.body.innerHTML = new Page(layout, content).render();
};

const onChangeLayout = () => {
  const checkbox = document.querySelector(
    '.list-card-check > input'
  ) as HTMLInputElement;
  changeLayoutCss(checkbox.checked ? LayoutTypes.LIST : LayoutTypes.GRID);
};

const changeLayoutCss = (newLayout: Layout) => {
  layoutUtils[newLayout]();
};

window.addEventListener('resize', () =>
  layoutUtils.makeAppResponsive(window.innerWidth)
);

init();
