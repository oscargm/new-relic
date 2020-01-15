import { App, Host } from '../model/index';
import { Layout, LayoutTypes } from '../types/layout';
import Card from '../components/card';
import { ListItem } from '../components/list-item';

export const renderWrapper = () => {
  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);
  const content = document.createElement('div');
  content.className = 'content';
  container.appendChild(content);
};

export const renderTitle = (layout: Layout, onChangeCallback) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'page-header';
  wrapperElement.innerHTML = `<span class="title">Apps by host</span>
                              <div class="subtitle">
                                <div class="username">
                                  <span>for user averylongemailaddress@companyname.com</span>
                                </div>
                                <div class="spacer">
                                </div>
                                <div class="list-card-check">
                                
                                  <input id="layoutChangeControl" type="checkbox" onChange="(e) => onChange(e)" ${
                                    layout === LayoutTypes.LIST
                                      ? `checked/><span>Show as an awesome grid</span>`
                                      : `/><span>Show as list</span>`
                                  }
                                </div>
                              </div>`;
  document.querySelector('.content').appendChild(wrapperElement);
  document
    .querySelector('#layoutChangeControl')
    .addEventListener('change', onChangeCallback);
};

export const renderCards = (hosts: Host[]) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'hosts-wrapper';
  const content = hosts.map((host, i) => renderHostCard(host, i)).join('');
  wrapperElement.innerHTML = content;
  document.querySelector('.content').appendChild(wrapperElement);
};

export const renderList = (hosts: Host[]) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.className = 'hosts-wrapper';
  const content = hosts.map((host, i) => renderHostCard(host, i)).join('');
  wrapperElement.innerHTML = content;
  document.querySelector('.content').appendChild(wrapperElement);
};

const renderHostCard = (host: Host, index: number): string =>
  new Card(
    index,
    host.name,
    host.apps
      .slice(0, 5)
      .map(app => renderListItem(app.name, app.apdex))
      .join('')
  ).render();

const renderListItem = (name: string, score: string): string =>
  new ListItem(name, score).render();
