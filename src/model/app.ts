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
}
