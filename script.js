const gridContainer = document.querySelector('.grid-container');
let count = 0;

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
}

createGrid(16);

const squares = document.querySelectorAll('.grid-item');

for (let el of squares) {
    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = "black";
    });
}
