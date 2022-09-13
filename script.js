const buttons = document.querySelector('#buttons');

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

buttons.addEventListener('click', (e) =>{
    
    let target = e.target;

    switch(target.id){
        case 'btn1':
            clear();
            createGrid(256);
            draw('grid1');
            break;
        case 'btn2':
            clear();
            createGrid(1024);
            draw('grid2');
            break;
        case 'btn3':
            clear();
            createGrid(4096);
            draw('grid3');
            break;
    };
});