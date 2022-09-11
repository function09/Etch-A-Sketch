//Creates a grid with the size indicated by gridSize
function createGrid (gridSize){
    for(let i = 0; i < gridSize; i++){
        const container = document.querySelector('#container');

        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
         };
};

const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', (e) => {
    const container = document.querySelector('#container');
        while(container.firstChild){
            container.removeChild(container.firstChild);
        };
    createGrid(256);
    const grids = document.querySelectorAll('#grid')
    grids.forEach((grids) => {
        grids.style.height = '31.25px';
        grids.style.width = '31.25px';
    });
});

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', (e) => {
    const container = document.querySelector('#container');
        while(container.firstChild){
            container.removeChild(container.firstChild);
        };
    createGrid(1024);
    const grids = document.querySelectorAll('#grid')
    grids.forEach((grids) => {
        grids.style.height = '15.625px';
        grids.style.width = '15.625px';
    });
});

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', (e) => {
    const container = document.querySelector('#container');
        while(container.firstChild){
            container.removeChild(container.firstChild);
        };
    createGrid(4096);
    const grids = document.querySelectorAll('#grid')
    grids.forEach((grids) => {
        grids.style.height = '7.8125px';
        grids.style.width = '7.8125px';
    });
});
