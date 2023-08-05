const grid = document.querySelector('#gridContainer');





let size = 4;
printSquares(size)

function printSquares(size){
    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.setAttribute('style', 'height: 10px; width: 10px; background: white; border-bottom: 1px solid gray');
        grid.appendChild(square);
        console.log('kj');
    }
}