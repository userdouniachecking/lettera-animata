const letter = document.querySelector('.letter');
const message = document.querySelector('.letter-inside p');

letter.addEventListener('click', () => {
    letter.classList.toggle('open');

    if (letter.classList.contains('open')) {
        message.style.opacity = 0;
        setTimeout(() => {
            message.style.transition = 'opacity 0.5s';
            message.style.opacity = 1;
        }, 600); // leggero ritardo per effetto sorpresa
    } else {
        message.style.opacity = 0;
    }
});
