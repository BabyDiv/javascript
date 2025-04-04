// debugger;

// let number;

// number = null;

// console.log(number);

let array = [7, 6, 4, 5, 9];

array.sort((a,b) => a - b);
console.log(array);

sentence = ['hello', 'world'];
words = sentence.join();
console.log(words);

let circle = document.querySelectorAll('.circles__item');
let square = document.getElementsByClassName('squares__item');
let circles = document.querySelector('.circles');
let squares = document.querySelector('.squares');
let triangle = document.getElementById('triangle');
let link = document.querySelectorAll('.links__item');
let div = document.createElement('div');
let paragraph = document.createElement('p');
let button = document.querySelectorAll('.buttons__item');
let scrollButton = document.querySelector('.scroll__button');
let scrollToTop = document.querySelector('.scroll__to-top');
let scrollBox = document.querySelector('.scroll__box');

circle[0].style.backgroundColor = 'purple';
square[1].style.borderRadius = '50%';
triangle.style.backgroundColor = 'lightgreen';

for (let i = 0; i < square.length; i++) {
  square[i].style.borderRadius = '50%';
}

circle.forEach(function(item, i) {
  item.style.backgroundColor = 'pink';
});

div.classList.add('circles__item');
console.log(div);
squares.appendChild(div);

paragraph.classList.add('circles__item');
console.log(paragraph);
circles.insertBefore(paragraph, circle[0]);
paragraph.style.margin = '0';

squares.removeChild(square[3]);
circles.replaceChild(square[0], circle[0]);

// paragraph.innerHTML = '<a>Ы</a>';
// paragraph.textContent = 'ЫЫЫЫЫЫЫ';

// button[1].onclick = function() {
//   button[1].style.backgroundColor = 'black';
// }

button.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = 'lightgreen';
  });
  item.addEventListener('mouseleave', function() {
    item.style.backgroundColor = 'turquoise';
  })
});

link.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
  });

  item.addEventListener('click', function() {
    item.style.color = 'darkturquoise';
  });

  item.addEventListener('mouseleave', function() {
    item.style.color = 'darkcyan';
  });
});

let isExpanded = false;

scrollButton.addEventListener('click', function() {
  if (isExpanded) {
    scrollBox.style.height = '200px';
  } else {
    scrollBox.style.height = scrollBox.scrollHeight + 'px';
  }

  isExpanded = !isExpanded;
});

scrollToTop.addEventListener('click', function() {
  scrollBox.scrollTop = 0;
})

function createUser(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log('Hello ' + this.name);
  }
  this.hello();
}

let ivan = new createUser('Ivan', 27);
let alex = new createUser('Alex', 27);
console.log(ivan);
console.log(alex);

let name = 'Vasya',
age = 27,
mail = 'vasya@mail.com';

document.write(`Этот сайт создал ${name}. Мне ${age} лет. Связаться со мной можно по почте: ${mail}`);
