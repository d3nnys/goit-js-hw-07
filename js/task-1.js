'use strict';

const items = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementCount}`);
});
