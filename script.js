function createGrid(size) {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let sizes = Math.floor(480 / size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.style.height = `${sizes}px`;
            div.style.width = `${sizes}px`;
            div.classList.add('square');
            container.appendChild(div);

        }
    }
    let square = document.querySelectorAll('.square');
    square.forEach(square =>{
       square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = randomColor();
       });
     });
    }

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
let newGrid = document.querySelector('#newGrid');
   newGrid.addEventListener('click', news);
   function news(){
    let size = prompt("enter size");
    size = parseInt(size)
   if(! isNaN(size) && size <100 && size>0 ){
    createGrid(size);
   }
        else{
            alert('invalid input');
        }
   }
 
createGrid(16);