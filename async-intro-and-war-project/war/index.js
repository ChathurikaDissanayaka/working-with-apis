let deckId

document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw-two-cards").addEventListener("click", drawCards)

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

function drawCards(){
    const url = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    fetch(url)
    .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}
