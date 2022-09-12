const btn1 = document.querySelector('#btn1');

const btn2 = document.querySelector('#btn2');

const btn3 = document.querySelector('#btn3');

//Creates a grid with the size indicated by gridSize
function createGrid (gridSize){
    for(let i = 0; i < gridSize; i++){
        const container = document.querySelector('#container');
        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
         };
};

// Clears grid
function clear(){
    const container = document.querySelector('#container');
        while(container.firstChild){
            container.removeChild(container.firstChild);
        };
};
// Allows 'drawing'
function draw(gridSelect){
    const grids = document.querySelectorAll('#grid')    
    grids.forEach((grid) => {
        grid.classList.add(gridSelect);
        grid.addEventListener('mouseover', (e) => {
            e.target.style.cssText = 'background-color: black;'
        });
    });
};

btn1.addEventListener('click', () => {

    clear();
    
    createGrid(256);
    
    draw('grid1')
});

btn2.addEventListener('click', () => {

    clear();
    
    createGrid(1024);
    
    draw('grid2')
});

btn3.addEventListener('click', () => {

    clear();
    
    createGrid(4096);
    
    draw('grid3')
});

