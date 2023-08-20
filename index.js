// grid display
const grid = document.querySelector('#gridContainer');

// grid controler
const displaySize = document.querySelector("#displaySize");
const inputSize = document.querySelector("#inputSize");


displaySize.textContent = inputSize.value;

inputSize.addEventListener("input", () => {
  displaySize.textContent = inputSize.value;
  updateSquares(inputSize.value);
});

window.onload = function() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    };
};


function updateSquares(size){
    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    };
};

