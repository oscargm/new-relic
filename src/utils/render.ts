import { App, Host } from '../model/index';

export function renderHosts(hosts: Host[]) {
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

export function renderHostElement(host: Host, index: number) {
  return `<div id="host-${index}" class="host">
              <h2>${host.name}</h2>
              <ul>${host.getTopApps().map(app => `<li>${app.name}</li>`)}</ul>
            </div>`;
}

export function renderWrapper() {
  const wrapperElement = document.createElement('div');
  wrapperElement.id = 'container';
  document.body.appendChild(wrapperElement);
}

export function renderApps(topApps: App[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'top-apps-wrapper';
  wrapperElement.innerHTML = topApps.map((app, i) => app.render(i)).join('');
  document.body.appendChild(wrapperElement);
}
