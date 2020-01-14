import { getData } from './api/data.service';
import { mapAppsToVM, mapHostsToVM } from './mappers';
import { App, Host } from './model/index';
import { renderHostElement, renderWrapper } from './utils/render';

var apps: App[];
var hosts: Host[];

async function init() {
  await getData().then(data => {
    apps = mapAppsToVM(data);
    hosts = mapHostsToVM(data);
  });
  renderWrapper();
  renderHosts(hosts);
}

function renderHosts(hosts: Host[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'top-hosts-wrapper';
  let wrapperContent = '';
  hosts.map((host, i) => {
    const a = renderHostElement(host, i);
    wrapperContent = wrapperContent + a;
  });
  wrapperElement.innerHTML = wrapperContent;

  document.querySelector('#container').appendChild(wrapperElement);
}

init();
