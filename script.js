let labelRow = (row,rowNumber) =>{
    row.classList.add('row')
    row.setAttribute('id',rowNumber);
}

let lableSquare = (square) =>{
    square.classList.add('square')
}
let i = 1;

let createGrid = (numberOfSquares) =>{

    for(let rowNumber = numberOfSquares; rowNumber>0;rowNumber--){
        let newRow  = document.createElement('div')
        labelRow(newRow,rowNumber);
     
        for(column=numberOfSquares; column>0;column--){
            let newSquare = document.createElement('div')
            lableSquare(newSquare)  
            newSquare.addEventListener('mouseenter', () =>{
                newSquare.classList.add('colour-change')
            });  
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}

createGrid(16);

let generate = document.querySelector('#grid-generator');
generate.addEventListener('click',() =>{
    let gridNumber = prompt("What size gris would you like?")
    container.innerHTML = '';
    createGrid(gridNumber);
})