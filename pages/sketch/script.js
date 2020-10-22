const canvas = document.querySelector('#canvas');
const body = document.querySelector('body');
const colorChoices = Array.from(document.querySelectorAll('.colorBox'));

let isDrawing = false;

let currentColor = 'background-color: black;';

let initialSize = 128;

colorChoices.forEach(box => {
    box.addEventListener('click', (e) => {
        currentColor = e.target.getAttribute('style', 'background-color');
    });
});

let draw = function(square) {
    square.setAttribute('style', currentColor);
}

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

body.addEventListener('mousedown', () => {
    isDrawing = true;
});

body.addEventListener('mouseup', () => {
    isDrawing = false;
});

let makeCanvas = function (x, y) {
    for (i = 0; i < y; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < x; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseover', (e) => {
                if (isDrawing) {
                    draw(e.target);
                }
            });
            row.appendChild(div);
        };
        canvas.appendChild(row);
    };
}

makeCanvas(initialSize, initialSize);



const reset = document.querySelector('#clear');


let clearCanvas = function () {
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => {
        square.setAttribute('style', 'background-color: white;');
    });
}


reset.addEventListener('click', (e) => {
    if (window.confirm('Reset canvas?')) {
        clearCanvas();
    }
});

let newCanvas = function (width, height) {
    const rows = Array.from(document.querySelectorAll('.row'));
    rows.forEach(row => {
        row.remove();
    });
    makeCanvas(width, height);
}

const newButton = document.querySelector('#new');

newButton.addEventListener('click', (e) => {
    let h = Number(window.prompt('Enter desired height: ', 128));
    let w = Number(window.prompt('Enter desired width: ', 128));
    newCanvas(w, h);
    
})
