const buttons = document.querySelector('#buttons');

//Creates a grid with the size indicated by dimensions
function createGrid (dimensions){

    for(let i = 0; i < dimensions**2; i++){
        
        const container = document.querySelector('#container');

        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
        
    };
        const grids = document.querySelectorAll('#grid');

        grids.forEach((e) => {
            e.style.width = `${500/dimensions}px`;
            e.style.height = `${500/dimensions}px`;
        });   
        
};

// Brings up a prompt that asks for a grid size 
function popUp(size){
    size = prompt ('Choose a grid size between 1 and 100', '0');

        if(size > 0 && size < 101){
            createGrid(size);
        } 
        else if(size > 100){
            alert('Value cannot be greater than 100');
        } 
        else {
            alert('Value must be greater than 0');
        }
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
            popUp();
            shade();
            break;
        case 'btn2':
            clear();
            break;
    };
});


