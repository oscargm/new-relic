import Greeter from './model/greeter';

function component() {
  const element = document.createElement('div');

  const greeter = new Greeter('world');
  element.innerHTML = greeter.greet();

  return element;
}

document.body.appendChild(component());
