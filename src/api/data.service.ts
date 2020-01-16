import { App } from './app';

/*
    I would use axios or fetch but due to the incompability with IE
    and the restriction of dependencies cannot import any dependency or polyfill
*/

//  export const getData = () =>
//    fetch('./host-app-data.json')
//     .then(res => res.json())
//     .then(data => data)
//     .catch(error => {
//       console.error('Error:', error);
//     });

/*
    So old XMLHttpRequest is used in order to prevent incompatibilities with IE
    this reduces considerably the performance of the requests
*/
export const getData = (callback: (response: App[]) => void) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', './host-app-data.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(xhttp.response));
    }
  };
};
