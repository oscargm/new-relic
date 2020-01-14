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
}
