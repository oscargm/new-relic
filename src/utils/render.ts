import { App, Host } from '../model/index';

export function renderHosts(hosts: Host[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'hosts-wrapper';
  let wrapperContent = '';
  hosts.map((host, i) => {
    wrapperContent = wrapperContent + host.createCard(i);
  });
  wrapperElement.innerHTML = wrapperContent;
  document.querySelector('#container').appendChild(wrapperElement);
}

export function renderWrapper() {
  const wrapperElement = document.createElement('div');
  wrapperElement.id = 'container';
  document.body.appendChild(wrapperElement);
}

export function renderTitle() {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'page-header';
  wrapperElement.innerHTML = `<span class="title">Apps by host</span>
                            <span class="subtitle">for user averylongemailaddress@companyname.com</span>`;
  document.querySelector('#container').appendChild(wrapperElement);
}

export function renderApps(topApps: App[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'top-apps-wrapper';
  wrapperElement.innerHTML = topApps.map((app, i) => app.render(i)).join('');
  document.body.appendChild(wrapperElement);
}
