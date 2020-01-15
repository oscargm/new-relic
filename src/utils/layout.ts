const setCssToElement = (el, styles) => {
  for (var property in styles) el.style[property] = styles[property];
};

const convertToGrid = () => {
  var wrapper = document.querySelector('.hosts-wrapper');
  setCssToElement(wrapper, {
    'flex-direction': 'row',
    'justify-content': 'space-around',
    'flex-wrap': 'wrap',
  });
  var cards = document.querySelectorAll('.card');
  cards.forEach(card =>
    setCssToElement(card, {
      width: '375px',
    })
  );
};

const convertToList = () => {
  var wrapper = document.querySelector('.hosts-wrapper');
  setCssToElement(wrapper, {
    'flex-direction': 'column',
    padding: '30px',
  });
  var cards = document.querySelectorAll('.card');
  cards.forEach(card =>
    setCssToElement(card, {
      width: '780px',
    })
  );
};

export const layoutUtils = {
  GRID: convertToGrid,
  LIST: convertToList,
};
