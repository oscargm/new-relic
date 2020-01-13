export const getData = () =>
  fetch('./host-app-data.json').then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.error('Error:', error);
    });
