'use strict';

const categories = document.getElementById('categories');
const items = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementCount}`);
});

const titles = document.querySelectorAll('h2');
titles.forEach(title => title.classList.add('title'));

// const listItem = categories.querySelectorAll;

const liEl = categories.querySelectorAll('li');
liEl.forEach(li => {
  if (li.classList.length === 0) {
    li.classList.add('list-item');
  }
});
