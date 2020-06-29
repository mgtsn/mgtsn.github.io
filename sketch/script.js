const container = document.querySelector('#container');

const images = ['img/b.PNG', 'img/tree.jpg', 'img/pig.jpg', 'img/cat.jpg', 'img/tent.jpg', 'img/bunny.jpg'];

let x = 3;
let y = 2;

for (i = 0; i < y; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j < x; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        const img = document.createElement('img');
        img.classList.add('pic');
        div.appendChild(img);
        row.appendChild(div);
    };
    container.appendChild(row);
};

const boxes = Array.from(document.querySelectorAll('.pic'));


boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (images.length > 0) {
        box.setAttribute('src', images.pop());
        };
    } )
})
