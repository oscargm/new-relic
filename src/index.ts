import { getData } from './api/data.service';
import { mapHostsToVM } from './mappers';
import { App, Host } from './model/index';
import { Layout, LayoutTypes } from './types/layout';
import { layoutUtils } from './utils/layout';
import { renderHostCard } from './utils/render';
import Page from './components/page/page';
import { updateCheckbox } from './utils/actions';

// let storeApps: App[];
let storeHosts: Host[];
let layout: Layout = LayoutTypes.GRID;

function init() {
  getData(data => {
    storeHosts = mapHostsToVM(data);
    renderFunctions(layout);
    document.querySelector('.checkmark').addEventListener('click',() =>{
      updateCheckbox();
      onChangeLayout()
    })
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
  // renderWrapper();
  // renderTitle(layout, onChangeLayout);
  // renderCards(getBestHosts(storeHosts));
  const content = `<div class="hosts-wrapper">
                  ${getBestHosts(storeHosts).map((host, i) => 
                    `${i%2 === 1? '<div style="width:30px"></div>': ''}
                    ${renderHostCard(host, i)}`).join('')}
                  </div>`;
  document.body.innerHTML = new Page(layout, 'layoutChangeControl', content).render();
};

const onChangeLayout = () => {
  const checkbox =   document.querySelector('.list-card-check > input') as HTMLInputElement;
  changeLayoutCss(checkbox.checked ? LayoutTypes.LIST: LayoutTypes.GRID);
};

const changeLayoutCss = (newLayout:Layout) => {
  layoutUtils[newLayout]();
};


window.addEventListener('resize', () => layoutUtils.makeAppResponsive(window.innerWidth));

init();
