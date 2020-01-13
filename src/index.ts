import { getData } from './api/data.service';
import { HostApp } from './model/host-app';
import { mapHostToVM } from './mappers';

var data: HostApp[];

async function init() {
  await getData().then(hosts => {
    data = mapHostToVM(hosts);
  });
  const topApps: HostApp[] = getTopApps(data);
  renderTopApps(topApps);
}

function getTopApps(data: HostApp[]): HostApp[] {
  return data.sort((a, b) => (a.apdex > b.apdex ? 1 : -1)).slice(0, 24);
}

function renderTopApps(topApps: HostApp[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'top-apps-wrapper';
  wrapperElement.innerHTML = topApps.map((app, i) => app.render(i)).join('');
  document.body.appendChild(wrapperElement);
}

init();
