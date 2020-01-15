import { App, Host } from '../model/index';

export function renderCards(hosts: Host[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'hosts-wrapper';
  const content = hosts.map((host, i) => renderHostCard(host, i)).join('');
  wrapperElement.innerHTML = content;
  document.querySelector('.content').appendChild(wrapperElement);
}

export function renderWrapper() {
  const container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);
  const content = document.createElement('div');
  content.className = 'content';
  container.appendChild(content);
}

export function renderTitle() {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'page-header';
  wrapperElement.innerHTML = `<span class="title">Apps by host</span>
                            <span class="subtitle">for user averylongemailaddress@companyname.com</span>`;
  document.querySelector('.content').appendChild(wrapperElement);
}

export function renderApps(topApps: App[]) {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'top-apps-wrapper';
  wrapperElement.innerHTML = topApps
    .map((app, i) => renderApp(app, i))
    .join('');
  document.querySelector('.hosts-wrapper').appendChild(wrapperElement);
}

const renderApp = (app: App, index: number): string =>
  `<div id="app-${index}" class="host-app">
      <h4>${app.name}</h4>
  </div>`;

const renderHostCard = (host: Host, index: number): string =>
  `<div id="host-${index}" class="card-wrapper">
    <div class="card">
      <div class="card-header">
        <span class="card-title">${host.name}</h2>
      </div>
      <div class="card-body">
        ${host
          .getTopApps()
          .slice(0, 5)
          .map(
            app => `<div class="host-app">
                      <div class="apdex-wrapper">
                        <span class="apdex">${app.apdex}</span>
                      </div>
                      <div class="appname-wrapper">
                        <span class="name">${app.name}</span>
                      </div>
                    </div>`
          )
          .join('')}
      </div>
    </div>
  </div>`;
