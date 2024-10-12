let deckId
let computerScore = 0
let userScore = 0

const newDeckBtn = document.getElementById("new-deck")
const newCardsBtn = document.getElementById("draw-two-cards")
const cardsEl = document.getElementById('cards')
const header = document.getElementById('header')
const remainingCards = document.getElementById('remaining-cards')
const computerScoreEl = document.getElementById('computer-score')
const userScoreEl = document.getElementById('user-score')

newDeckBtn.addEventListener("click", handleClick)
newCardsBtn.addEventListener("click", drawCards)

async function handleClick() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await response.json()
    deckId = data.deck_id
    remainingCards.innerText = `Remaining cards: ${data.remaining}` 
    newCardsBtn.disabled = false;
}

async function drawCards(){
    const url = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    const response = await fetch(url)
    const data = await response.json()

    cardsEl.innerHTML = `
        <img src=${data.cards[0].image}>
        <img src=${data.cards[1].image}>
        `

    determineWinner(data.cards[0], data.cards[1])

    remainingCards.innerText = `Remaining cards: ${data.remaining}` 
    computerScoreEl.innerText = `Computer Score: ${computerScore}`
    userScoreEl.innerText = `User Score: ${userScore}`

    if (data.remaining === 0) {
        newCardsBtn.disabled = true

        let finalWinner = ""

        if(computerScore > userScore){
            finalWinner = "The computer won the game!"
        } else if(computerScore < userScore){
            finalWinner = "You won the game!"
        } else{
            finalWinner = "It's a tie game!"
        }
        header.innerText = finalWinner

        computerScore = 0
        userScore = 0
    }
}

function determineWinner(card1, card2){
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    
    const indexOfCard1 = valueOptions.indexOf(card1.value)
    const indexOfCard2 = valueOptions.indexOf(card2.value)
    
    if( indexOfCard1 > indexOfCard2){
        computerScore++
        header.innerText = "Computer wins!"
    } else if (indexOfCard1 < indexOfCard2){
        header.innerText = "You win!"
        userScore++
    } else{
        header.innerText = "War!"
    }
}
