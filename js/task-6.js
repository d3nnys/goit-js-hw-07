'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  numberInput: document.querySelector('#controls input'),
  container: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

function createBoxes(amount) {
  const boxes = Array.from({ length: amount }, (_, index) => createBox(index));
  refs.container.innerHTML = '';
  refs.container.append(...boxes);
  refs.numberInput.value = '';
}

function createBox(index) {
  const size = 30 + index * 10;
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function destroyBoxes() {
  refs.container.innerHTML = '';
}

refs.createBtn.addEventListener('click', () => {
  const amount = parseInt(refs.numberInput.value, 10);

  if (isValidAmount(amount)) {
    createBoxes(amount);
  }
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function isValidAmount(amount) {
  return Number.isInteger(amount) && amount >= 1 && amount <= 100;
}
