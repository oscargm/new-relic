export class App {
  name: string;
  contributors: string[];
  version: string;
  apdex: string;
  host: string[];

  constructor(
    name: string,
    contributors: string[],
    version: string,
    apdex: string,
    host: string[]
  ) {
    this.name = name;
    this.contributors = contributors;
    this.version = version;
    this.apdex = apdex;
    this.host = host;
  }

  render(index: number) {
    return `<div id="app-${index}" class="host-app">
              <h4>${this.name}</h4>
            </div>`;
  }

  renderHost(index: number, hostname: string) {
    return `<div id="app-${index}" class="host">
              <h4>${hostname}</h4>
              <h2>
              <ul>${this.host.map(h => `<li>${h}</li>`)}</ul>
            </div>`;
  }
}
