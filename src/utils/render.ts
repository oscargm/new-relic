import { Card } from 'components';
import { ListItem } from 'components';
import { Host } from 'model';

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
