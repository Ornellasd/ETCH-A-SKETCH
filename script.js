const mainContainer = document.querySelector('.container');
const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('#reset');
const blackBtn = document.querySelector('#black');
const colorBtn = document.querySelector('#color')
let count = 0;
let squares;

const createGrid = (size) => {
    let columnsRows = '1fr '.repeat(size);
    gridContainer.setAttribute('style', `grid-template-columns: ${columnsRows}; grid-template-rows: ${columnsRows}`);
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

const changeGridColor = (color) => {
    for(let el of squares) {
        el.addEventListener('mouseenter', () => {
            if(color === 'random') {
                el.style.backgroundColor = '#'+Math.random().toString(16).substr(-6)  
            } else {
                el.style.backgroundColor = color;    
            }
        });
    }
}

createGrid(16);

for (let el of squares) {
    changeGridColor('random');
}

resetBtn.addEventListener('click', () => {
    const gridSize = prompt('How big?');
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(gridSize);
});

colorBtn.addEventListener('click', () => {
    changeGridColor('random');
});

blackBtn.addEventListener('click', () => {
    changeGridColor('black');
});
