import { HostApp as APIHost } from './api/model';
import { HostApp as VMHost } from './model/host-app';

export const mapHostToVM = (appHosts: APIHost[]): VMHost[] =>
  appHosts.map(
    appHost =>
      new VMHost(
        appHost.name,
        appHost.contributors,
        appHost.version,
        appHost.apdex,
        appHost.host
      )
  );
