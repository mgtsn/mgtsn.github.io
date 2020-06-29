
const phrases =  Array.from(document.querySelectorAll('.phrase'));

const body = document.querySelector('body');

count = 0;



let movePhrase = function (p, direction) {
    if (direction % 2 == 0) {
        p.setAttribute('style', 'transform: translateX(35vw); background: rgb(132, 236, 141)');
    } else {
        p.setAttribute('style', 'transform: translateX(-35vw); background: rgb(132, 236, 141)');
    }

    // count += 1;
    // if (count == phrases.length) {
    //     body.setAttribute('style', 'background: rgb(255, 249, 231);');
    // }

    
}


phrases.forEach(p => {
    p.firstElementChild.addEventListener('click', (e) => {
        e.target.remove();
        // p.setAttribute('style', 'background: rgb(132, 236, 141)');
        // p.setAttribute('style', 'transform: translateX(100px)');
        movePhrase(p, phrases.indexOf(p));
    } )
});

