// grid display
const grid = document.querySelector('#gridContainer');

// grid controler
const displaySize = document.querySelector('#displaySize');
const inputSize = document.querySelector('#inputSize');

let newSize = 4;

//print default 16 squares
window.onload = function() {
  for (let i = 0; i < 16; i++) {
      let square = document.createElement('div');
      square.classList.add('square', 'squareG1');
      grid.appendChild(square);
  };
};

displaySize.textContent = `${newSize} \u2715 ${newSize}`;

inputSize.addEventListener('change', () => {
  removeGrid();
  newSize = inputSize.value;
  displaySize.textContent = `${newSize} \u2715 ${newSize}`;
});

function removeGrid() {
  numberOfLoops = grid.childElementCount;
  for (let i = 0; i < numberOfLoops; i++) {
    grid.removeChild(grid.lastChild);
}
  }
