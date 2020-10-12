let currentTurn = 1
let players = 5;
playerArray = []
let influenceArray = [
    "Duke1", "Duke2", "Duke3",
    "Captain1", "Captain2", "Captain3",
    "Assassin1", "Assassin2", "Assassin3",
    "Contessa1", "Contessa2", "Contessa3",
    "Inquisitor1", "Inquisitor2", "Inquisitor3"
]

function getInfluenceCard() {
    let len = influenceArray.length
    let choice = Math.floor(Math.random() * len) 
    let selection = influenceArray[choice]
   
    influenceArray.splice(choice, 1)
    return selection
} 



function Player (name) {
    this.playerName = name
    this.influenceOne = getInfluenceCard()
    this.influenceTwo = getInfluenceCard()
}

function nextTurn() {
    if (currentTurn < players) {
        currentTurn++
    } else {
       currentTurn = 1; 
    }

    let player = document.querySelector("#playerTurn")
    player.innerHTML = `Player ${currentTurn}'s turn`
}

function Player (name, turn) {

    this.join = function(name) {
        if (playerArray.length < players) {
            playerArray.push(name)
        }
    }

    this.playerName = name
    this.turn = turn
    this.influenceOne = getInfluenceCard()
    this.influenceTwo = getInfluenceCard()
    this.money = 2
    this.faceDown1 = false;
    this.faceDown2 = false;

    this.income = function() {
        this.money++
    }
    this.foreignAid = function() {
        this.money += 2
    }
    
}

function Duke (players) {
    Player.call(this, players)
    this.dukeMoney = function() {
        console.log("Duke Money")
        this.nextTurn()
    }
}

function Captain (players) {
    Player.call(this, players)
    this.capSteal = function() {
        console.log("Captain Steal")
        this.nextTurn()

    }
}

function Assassin (players) {
    Player.call(this, players)
    this.assassinate = function() {
        console.log("Assassinate")
        this.nextTurn()

    }
}

function Contessa (players) {
    Player.call(this, players)
    this.blockAssassin = function() {
        console.log("Block Assassin")
        this.nextTurn()
    }
}

function Inquisitor (players) {
    Player.call(this, players)
    this.inquisite = function() {
        console.log("Inquisite")
        this.nextTurn()
    }
}



function clickHandler(event) {

    switch (event.target.id) {
        case "duke":
            console.log("Duke")
            break;
        case "captain":
            console.log("captain")
            break;
        case "assassin":
            console.log("assassin")
            break;
        case "contessa":
            console.log("contessa")
            break;
         case "inquisitor":
            console.log("inquisitor")
            break;
        case "challengeButton":
            console.log("Challenge")
            break;
        case "coupButton":
            console.log("Coup")
            break;
        case "skip":
            nextTurn()
            break;
        case "deck":
            console.log("Deck")
            break;
        case "bank":
            let player = playerArray.find(user => user.turn == currentTurn)
            player.income()
            console.log(player)
            nextTurn()
            break;
        case "block":
            console.log("Block")
            break;
        
    }

}



// EVENT LISTENERS

// influence cards
let duke = document.querySelector("#duke")
let captain = document.querySelector("#captain")
let assassin = document.querySelector("#assassin")
let contessa = document.querySelector("#contessa")
let inquisitor = document.querySelector("#inquisitor")

// action buttons
let challenge = document.querySelector("#challengeButton")
let coup = document.querySelector("#coupButton")
let block = document.querySelector("#block")
let skip = document.querySelector("#skip")

// middle section
let deck = document.querySelector("#deck")
let bank = document.querySelector("#bank")

duke.addEventListener("click", clickHandler)
captain.addEventListener("click", clickHandler)
assassin.addEventListener("click", clickHandler)
contessa.addEventListener("click", clickHandler)
inquisitor.addEventListener("click", clickHandler)
challenge.addEventListener("click", clickHandler)
coup.addEventListener("click", clickHandler)
skip.addEventListener("click", clickHandler)
deck.addEventListener("click", clickHandler)
bank.addEventListener("click", clickHandler)
block.addEventListener("click", clickHandler)
// TESTS

let player1 = new Player("John", 1)
player1.join(player1)
let player2 = new Player("Kalen", 2)
player2.join(player2)
let player3 = new Player("Dylan", 3)
player3.join(player3)
let player4 = new Player("Chloe", 4)
player4.join(player4)
let player5 = new Player("Gabbie", 5)
player5.join(player5)



