import Greeter from './model/greeter';
import { getData } from './api/data.service';

function component() {
  getData();
  const element = document.createElement('div');

  const greeter = new Greeter('world');
  element.innerHTML = greeter.greet();

  return element;
}

document.body.appendChild(component());
