export const getData = () =>
  fetch('./host-app-data.json')
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => console.log(data))
    .catch(error => {
      console.error('Error:', error);
    });
