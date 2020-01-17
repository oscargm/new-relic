import Card from '../components/card';
import { ListItem } from '../components/list-item';
import { Host } from '../model/index';

export const renderHostCard = (host: Host, index: number): string =>
  new Card(
    index,
    host.name,
    host
      .getTopApps()
      .slice(0, 5)
      .map(app => renderListItem(app.name, app.apdex))
      .join('')
  ).render();

const renderListItem = (name: string, score: string): string =>
  new ListItem(name, score).render();
