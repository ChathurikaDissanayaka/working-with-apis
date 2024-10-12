let deckId

const newDeckBtn = document.getElementById("new-deck")
const newCardsBtn = document.getElementById("draw-two-cards")
const cardsEl = document.getElementById('cards')

newDeckBtn.addEventListener("click", handleClick)
newCardsBtn.addEventListener("click", drawCards)

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })

        newCardsBtn.disabled = false;
}

function drawCards(){
    const url = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        cardsEl.innerHTML = `
            <img src=${data.cards[0].image}>
            <img src=${data.cards[1].image}>
            `
    })
}
