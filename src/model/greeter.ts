export default class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `<h1>Hello, ${this.greeting}</h1>`;
  }
}
