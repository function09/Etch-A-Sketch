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
    size = prompt ('Choose a grid size between 1 and 100', '1');

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

// Allows full black shading of squares
function draw(){
    const grids = document.querySelectorAll('#grid');    
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
};

// Uses hexadecimal values to generate a colorful grid 
function colorMode(){
    const hexValue = () => Math.floor((Math.random()*16777216)).toString(16)   
   
    const grids = document.querySelectorAll('#grid');    
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#' + hexValue()
        }, {once:true});
    });
};

// Increases opacity after each grid
function monochromeMode(){
    let darken = 0
    
    const grids = document.querySelectorAll('#grid');    
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgba(0,0,0,${darken += .1})`
        },{once:true});
    });
};

buttons.addEventListener('click', (e) =>{
    
    let target = e.target;

    switch(target.id){
        case 'btn1':
            clear();
            popUp();
            draw()
            break;
        case 'btn2':
            clear();
            break;
        case 'btn3':
            clear();
            popUp();
            colorMode();
            break;
        case 'btn4':
            clear();
            popUp();
            monochromeMode();
            break;
    };
});
