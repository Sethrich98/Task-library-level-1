const square = document.querySelector('.square');


square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
});


square.addEventListener('mousedown', () => {
    square.style.backgroundColor = 'red';
});


square.addEventListener('mouseup', () => {
    square.style.backgroundColor = 'yellow';
});

square.addEventListener('dblclick', () => {
    square.style.backgroundColor = 'green';
});


window.addEventListener('wheel', () => {
    square.style.backgroundColor = 'orange';
});


document.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'b':
            square.style.backgroundColor = 'blue';
            break;
        case 'r':
            square.style.backgroundColor = 'red';
            break;
        case 'y':
            square.style.backgroundColor = 'yellow';
            break;
        case 'g':
            square.style.backgroundColor = 'green';
            break;
        case 'o':
            square.style.backgroundColor = 'orange';
            break;
        default:
            break;
    }
});
