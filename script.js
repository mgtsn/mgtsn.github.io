
// const phrases =  Array.from(document.querySelectorAll('.phrase'));

const body = document.querySelector('body');
const prev = document.querySelector('#pre');
const next = document.querySelector('#next');
const pages = document.querySelector('#page');

let page = 0;

let colors = [1, .9, .8, .7, .5, .4, .6, .8, 1]
let lastPage = colors.length;

let ch2 = 9;

const turn = function (n) {
    page += n;
    if (page < 0) {
        page = 0;
    } else if (page > lastPage) {
        page = lastPage;
    }

    if (page == ch2) {
        pages.innerHTML = 'Chapter 2';
    }

    if (page == ch2 - 1) {
        pages.innerHTML = 'Chapter 1';
    }
    console.log(page);
    pages.setAttribute('style', 'filter: brightness(' + colors[page] + ');');
    

}

prev.addEventListener('click', () => {
    turn(-1);
});

next.addEventListener('click', () => {
    turn(1);
});


