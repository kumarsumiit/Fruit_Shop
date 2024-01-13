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