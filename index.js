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
let div = document.createElement('div');
let paragraph = document.createElement('p');

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
