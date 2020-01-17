export const updateCheckbox = () => {
  const checkbox = document.querySelector(
    '.list-card-check > input'
  ) as HTMLInputElement;
  checkbox.checked = !checkbox.checked;
};

export const setCheckboxChecked = () => {
  const checkbox = document.querySelector(
    '.list-card-check > input'
  ) as HTMLInputElement;
  if (!checkbox.checked) {
    checkbox.checked = true;
  }
};
