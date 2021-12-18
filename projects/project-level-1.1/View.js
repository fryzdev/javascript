const cardsElements = document.querySelectorAll('.deck .card')


function removeAllSelection()
{
    for (let index = 0; index < cardsElements.length; index++) 
        cardsElements[index].classList.remove('selected')
}

function handleInit ()
{
    // 'init()' is in 'Logic.js'
    init()

    for (let index = 0; index < cardsElements.length; index++) 
    {
        // 'cards' is in 'Logic.js'
        cardsElements[index].textContent = cards[index]
    }
}

function handlePrev ()
{
    removeAllSelection()

    // 'prev()' is in 'Logic.js'
    prev()

    // 'currentPosition' is in 'Logic.js'
    cardsElements[currentPosition].classList.add('selected')
}

function handleNext ()
{
    removeAllSelection()

    // 'next()' is in 'Logic.js'
    next()

    // 'currentPosition' is in 'Logic.js'
    cardsElements[currentPosition].classList.add('selected')
}


const btnInit = document.querySelector('.btn-init')
btnInit.addEventListener('click', () => handleInit())

const bntPrev = document.querySelector('.btn-prev')
bntPrev.addEventListener('click', () => handlePrev())

const btnNext = document.querySelector('.btn-next')
btnNext.addEventListener('click', () => handleNext())
