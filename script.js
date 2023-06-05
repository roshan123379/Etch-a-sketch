let container = document.getElementById('container');
let reset= document.querySelector('#reset')
let change = document.querySelector('.change')
let para = document.getElementById('para')

let gridSize=16;
function createGrid(size){
        container.style.gridTemplateColumns = `repeat(${size},1fr)`;
        container.innerHTML='';
        
for(i=0;i<size*size;i++){
    let cell = document.createElement('div');
        cell.classList.add('cell')
        cell.addEventListener('mouseover',changeColor);
        container.appendChild(cell);
}            
}

function changeColor(event){
    event.target.style.backgroundColor= "blue";
}

createGrid(gridSize);

reset.addEventListener('click',()=>{
    let cells=document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.style.backgroundColor='';
    })
});

change.addEventListener('click',()=>{
    const sizeInput = document.getElementById('size');
    const newSize = parseInt(sizeInput.value);
    if (newSize >= 1 && newSize <= 64) {
    gridSize = newSize;
    createGrid(gridSize);
    para.innerText=''
    }
    else{
        para.innerText="please enter a valid number!"
    }
    
    
});