//Creates a grid with the size indicated by gridSize
function createGrid (gridSize){
    for(let i = 0; i < gridSize; i++){
        const container = document.querySelector('#container');

        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
        grid.style.cssText = 'width: 29.25px; height: 29.25px; border: 1px solid rgb(206, 206, 206);';
    };
};

