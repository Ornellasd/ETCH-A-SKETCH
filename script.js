const gridContainer = document.querySelector('.grid-container');

const createGrid = () => {
	for(let i = 0; i < 16; i++) {
		for(let j = 0; j < 16; j++) {
			const div = document.createElement('div');
			div.setAttribute('class', 'grid-item');
			gridContainer.appendChild(div);
		}
	}
}

createGrid();
/*
	<div class="grid-item" id="1" style="background-color: blue">1</div>
	<div class="grid-item" id="2" style="background-color: red">2</div>
	<div class="grid-item" id="3" style="background-color: green">3</div>
	<div class="grid-item" id="4" style="background-color: green">4</div>
*/