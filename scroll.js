const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries => {
    entries.forEach(x => {
        x.target.classList.toggle('show', x.isIntersecting)
        if (x.isIntersecting) { observer.unobserve(x.target) } // stop observer when x has appeared
    })

}, {
    threshold: 0.5, // trigget when % on the screen
    rootMargin: '100px'    // preload 100px before entering visible area
})

cards.forEach(x => observer.observe(x))


const lastCard = document.querySelector('.card:last-child')

const lastCardobserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        loadCards();
        lastCardobserver.unobserve(entries[0].target);
        lastCardobserver.observe(document.querySelector('.card:last-child'))
    }
}, {
    rootMargin: '100px'
})

lastCardobserver.observe(lastCard)

const container = document.querySelector('.container')

let id = 11
function loadCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = 'Card ' + `${id++}`;
        observer.observe(card)
        container.appendChild(card);
    }
}