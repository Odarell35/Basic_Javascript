let cards = []
let  sum = 0
let  isAlive = false
let hasBlackJack = false
let message =""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Lera",
    chips: 100 
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    
    let card = Math.floor(Math.random() * 13) + 1
    if (card === 1) {
            card = 11
    }
    else if (card > 10) {
        card = 10
    }
   
    return card
}

function StartGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
    // Hide the start button after starting the game
   
}
function renderGame() {
   cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
    message = "Do you want to draw a new card? "
    
}else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    
    hasBlackJack = true
    player.chips += 10 // Add chips for winning
    
}else {
    message = "You're out of the game! "   
    
    isAlive = false
    player.chips -= 10 // Deduct chips for losing
    if (player.chips < 10) {
        message += "You don't have enough chips to continue. Please restart the game."
        messageEl.style.color = "red"
        restartGame()
    }
    
}
    messageEl.textContent = message
}
 
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) { 
        let newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
    else {
        messageEl.textContent = "You can't draw a new card!"
        messageEl.style.color = "red"
        restartGame()
        messageEl.style.color = "white"
    }
}

function restartGame() {
    // Reset the game state
    cards = []
    sum = 0
    isAlive = false
    hasBlackJack = false
    message = ""
    
    let messageEl = document.getElementById("message-el")

    let playerEl = document.getElementById("player-el")
    messageEl.textContent = "Welcome to Blackjack! Press 'Start Game' to begin."
    // Reset the player's chips if they have less than 10
    // if (player.chips < 10) {
    //     player.chips = 100 // Reset to starting amount
    //     messageEl.style.color = "black"
    // }
    
    // Update the UI
    playerEl.textContent = player.name + ": $" + player.chips
}