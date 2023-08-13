// grid display
const grid = document.querySelector('#gridContainer');

// grid controler
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});



let size = 2;
printSquares(size);

function printSquares(size){
    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.setAttribute('style', 'height: 10px; width: 10px; background: white; border-bottom: 1px solid gray');
        grid.appendChild(square);
    };
};