let labelRow = (row,rowNumber) =>{
    row.classList.add('row');
}

let lableSquare = (square) =>{
    square.classList.add('square')
}
let i = 1;

let setHeight = (element,x) =>{
    element.style.height = (500/x)+"px";
}

let setRowFlexBasis = (element,x) =>{
    element.style.flexBasis = (500/x)+"px";
}


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
   const squares = document.querySelectorAll(".square")

   squares.forEach((square)=>{
       setHeight(square,numberOfSquares);
   });

   const rows = document.querySelectorAll(".row")

   rows.forEach((row)=>{
    setRowFlexBasis(row,numberOfSquares);
    });

}

createGrid(16);

let generate = document.querySelector('#grid-generator');
generate.addEventListener('click',() =>{
    let gridNumber = prompt("What size gris would you like?")
    container.innerHTML = '';
    createGrid(gridNumber);
})