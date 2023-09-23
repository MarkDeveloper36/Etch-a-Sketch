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
      square.classList.add('square', 'squareG4');
      grid.appendChild(square);
      square.addEventListener('mouseenter', changeColor);
      }
  };

displaySize.textContent = `${newSize} \u2715 ${newSize}`;

inputSize.addEventListener('change', () => {
  removeGrid();
  newSize = inputSize.value;
  addGrid()
  displaySize.textContent = `${newSize} \u2715 ${newSize}`;
});

function removeGrid() {
  numberOfLoops = grid.childElementCount;
  for (let i = 0; i < numberOfLoops; i++) {
    grid.removeChild(grid.lastChild);
  }
};

function addGrid() {
  numberOfLoops = (newSize * newSize);
  for (let i = 0; i < numberOfLoops; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    giveSquareRightSize(square);
    square.addEventListener('mouseenter', changeColor);
  }
};

function giveSquareRightSize(square) {
  newSize == 4 ? square.classList.add('squareG4'): null;
  newSize == 5 ? square.classList.add('squareG5'): null;
  newSize == 6 ? square.classList.add('squareG6'): null;
  newSize == 7 ? square.classList.add('squareG7'): null;
  newSize == 8 ? square.classList.add('squareG8'): null;
  newSize == 9 ? square.classList.add('squareG9'): null;
  newSize == 10 ? square.classList.add('squareG10'): null;
};

//add color to square when hovered
let isRainbowActive = false;
const rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener('click', () => {
  rainbowButton.classList.toggle('rainbowActive');
  isRainbowActive == false ? isRainbowActive = true : isRainbowActive = false;
});

const colorInput = document.querySelector('#colorInput');

function changeColor(event) {
  const rainbowColorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  if (isRainbowActive == false) {
    event.target.style.backgroundColor = colorInput.value;
  } else {
    event.target.style.backgroundColor = (rainbowColorArr[(getRandomNumber())]);
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 7);
};
