const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('#reset');
const blackBtn = document.querySelector('#black');
const colorBtn = document.querySelector('#color')
let count = 0;
let squares;

const createGrid = (size) => {
    // need to figure out best way to have size determine grid-template-columns and grid-template-rows
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            count++;
            const div = document.createElement('div');
            div.setAttribute('class', 'grid-item');
            div.setAttribute('id', 'square-' + count);
            gridContainer.appendChild(div);
        }
    }
    squares = document.querySelectorAll('.grid-item');
}

function get_random_color() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2); // pad with zero
  }
  return "#"+c()+c()+c();
}

createGrid(16);

for (let el of squares) {
    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = get_random_color();
    });
}

resetBtn.addEventListener('click', () => {
    for (let el of squares) {
        el.style.backgroundColor = "white";
    }
});

blackBtn.addEventListener('click', () => {
    for (let el of squares) {
        el.addEventListener('mouseenter', () => {
            el.style.backgroundColor = "black";
        });
    }
});

colorBtn.addEventListener('click', () => {
    for (let el of squares) {
        el.addEventListener('mouseenter', () => {
            el.style.backgroundColor = get_random_color();
        });
    }
});
