const cards = document.querySelectorAll('.service__card');
const backBtn = document.querySelectorAll('.backBtn');
const home__serviceCard = document.querySelectorAll('.home__serviceCard');
const payment__headerBtn = document.querySelectorAll('.payment__headerBtn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});

home__serviceCard.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});

backBtn.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});
payment__headerBtn.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});

