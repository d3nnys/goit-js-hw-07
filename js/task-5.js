'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

function changeColorHandler() {
  const changeColor = getRandomHexColor();
  spanEl.textContent = changeColor;
  body.style.backgroundColor = changeColor;
}

btnEl.addEventListener('click', changeColorHandler);
