let firstCard = 6
let secondCard = 7
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack=false
let isAlive=true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl=document.querySelector(".sum-el")
let cardEl=document.querySelector("#card-el")
console.log(messageEl)
function startgame()
{
    rendergame()
}
function rendergame() {
    cardEl.textContent="Cards:"+cards[0]+" "+cards[1]
    sumEl.textContent="Sum:"+sum
    
    if (sum <=21) {
        message = "Do you want to draw a card? 😊"
    }
    else if (sum === 21) {
        message = "wohooo! you've got blackjack!🥳"
        hasBlackJack=true
    } else {
        message = "you're out of the game! 😢"
        isAlive=false
    }

    messageEl.textContent = message
}
function newcard()
{
    console.log("Drawing a new card by deck!")
    let card=8
    sum+=card
    rendergame()

}