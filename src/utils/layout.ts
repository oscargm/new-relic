import { updateCheckbox } from './actions';

/*
  tslint:disable:prefer-for-of
  IE11 doesn't support nodelist.forEach()
  https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
*/

const convertToGrid = () => {
  const wrapper = document.querySelector('.hosts-wrapper');
  wrapper.classList.remove('list');
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('list');
  }
  changeText('Show as list');
  setStyleToElement('.subtitle', { width: 'auto' });
};

const convertToList = () => {
  const wrapper = document.querySelector('.hosts-wrapper');
  wrapper.classList.add('list');
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add('list');
  }
  changeText('Show as an awesome grid');
  setStyleToElement('.subtitle', { width: '320px' });
};

const changeText = (text: string) => {
  document.querySelector('.list-card-check > label').textContent = text;
};

const setStyleToElement = (
  elementSelector: string,
  styles: { width: string }
) => {
  const el = document.querySelector(elementSelector) as HTMLElement;
  for (const property in styles) {
    if (styles[property]) {
      el.style[property] = styles[property];
    }
  }
};

const makeAppResponsive = (width: number) => {
  const checkbox = document.querySelector(
    '.list-card-check > input'
  ) as HTMLInputElement;
  if (width < 857) {
    if (!checkbox.checked) {
      convertToList();
      updateCheckbox();
    }
  } else if (width > 857) {
    if (checkbox.checked) {
      convertToGrid();
      updateCheckbox();
    }
  }
};

export const layoutUtils = {
  GRID: convertToGrid,
  LIST: convertToList,
  makeAppResponsive,
};
