const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom ='3px solid orange';

const bheader = document.getElementById('basket-heading');
bheader.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</P>';

const fruit = document.getElementsByClassName('fruit');

for(let i=0; i<fruit.length;i++){
  fruit[i].style.fontWeight = 'bold';
  fruit[2].style.backgroundColor = 'yellow'
}
const listItems = document.getElementsByTagName('li');
listItems[4].style.color = 'blue';

for(let i=0; i<listItems.length;i++){
  listItems[i].style.fontStyle = 'italic';
}
const mainHeadings = document.querySelector('#main-heading');
mainHeadings.style.textAlign = 'right';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '500px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = 'white';
  fruitItems[i].style.padding = '10px';
  fruitItems[i].style.margin = '10px';
  fruitItems[i].style.borderRadius = '5px';
}
const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');  // Corrected selector
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = 'brown';
  evenFruitItems[i].style.color = 'white';
}
const additionalElements = document.querySelectorAll('.additional-class');
