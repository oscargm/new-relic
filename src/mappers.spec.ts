import { Host, App as VMApp } from '@model';
import { App as APIApp } from '@api';
import { mapAppsToVM } from './mappers';
describe('Mappers', () => {
  const hosts: Host[] = [];
  const apiApps: APIApp[] = [];
  const vmApps: VMApp[] = [];
  const contributors: string[] = [
    'contrib 1',
    'contrib 2',
    'contrib 3',
    'contrib 4',
  ];
  const appHosts: string[] = [
    'kfsdfsd-fsdfsd-fdsfsd',
    'ffsdfds-fds-fsfs-fds',
    '164fds-fds56fsd-fds54f',
  ];

  for (let i = 0; i < 10; i++) {
    const apdex = String(Math.random() * 100);
    apiApps.push(
      new APIApp(`app${i}`, contributors, `0.0.${i}`, apdex, appHosts)
    );
    vmApps.push(
      new VMApp(`app${i}`, contributors, `0.0.${i}`, apdex, appHosts)
    );
  }

  for (let i = 0; i < 10; i++) {
    hosts.push(new Host(`host-${i}`, apiApps));
  }
  it('should map app from api to vm', () => {
    expect(mapAppsToVM(apiApps)).toStrictEqual(vmApps);
  });
});
