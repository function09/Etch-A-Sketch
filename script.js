const buttons = document.querySelector('#buttons');

//Creates a grid with the size indicated by gridSize
function createGrid (gridSize){
    for(let i = 0; i < gridSize**2; i++){
        
        const container = document.querySelector('#container');

        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
        
    };
        const grids = document.querySelectorAll('#grid');

        grids.forEach((e) => {
            e.style.width = `${500/gridSize}px`;
            e.style.height = `${500/gridSize}px`;
        });   
        
};

// Clears grid
function clear(){
    const container = document.querySelector('#container');
        while(container.firstChild){
            container.removeChild(container.firstChild);
        };
};


// Allows shading of squares
function shade(){
    const grids = document.querySelectorAll('#grid');    
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
};

buttons.addEventListener('click', (e) =>{
    
    let target = e.target;

    switch(target.id){
        case 'btn1':
            clear();
            createGrid(10);
            shade();
            break;
        case 'btn2':
            clear();
            break;
    };
});


