// grid display
const grid = document.querySelector('#gridContainer');

// grid controler
const displaySize = document.querySelector('#displaySize');
const inputSize = document.querySelector('#inputSize');

let chosenSize = 16;
let squareCount = 16;

//set size display to default value
displaySize.textContent = chosenSize;

//event listener to get input for gridsize
inputSize.addEventListener('input', () => {
  chosenSize = inputSize.value;
  displaySize.textContent = chosenSize;
  addOrRemoveSquares(squareCount, chosenSize);
});


// print default 16 squares
window.onload = function() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    };
};



//make desision to add or remove squares
function addOrRemoveSquares(squareCount, chosenSize) {
  if (chosenSize > squareCount){
    addSquares(chosenSize);
  } else if (chosenSize < squareCount){
    removeSquares(chosenSize);
  }
};

// add squares
function addSquares(size) {
    for (let i = squareCount; i < size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        squareCount++;
    };
};

// removesquares
function removeSquares(size) {
  for (let i = squareCount; i > size; i--) {
    let square = document.querySelector('.square');
    square.remove();
    squareCount--;
  }
}