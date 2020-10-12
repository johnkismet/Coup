let currentTurn = 0
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
    if (selection.includes("Duke")) {
        console.log("duke!")
    }
    influenceArray.splice(choice, 1)
    return selection
} 



function Player (name) {
    this.playerName = name
    this.influenceOne = getInfluenceCard()
    this.influenceTwo = getInfluenceCard()
}


function Influence (players) {
    this.players = players
    this.nextTurn = function() {
        if (currentTurn < this.players) {
            currentTurn++
        } else {
           currentTurn = 0; 
        }
        console.log(currentTurn)
    }
    this.money = 2
    this.faceDown = false;
    this.income = function() {
        this.money++
    }
    this.foreignAid = function() {
        this.money += 2
    }
    
}

function Duke (players) {
    Influence.call(this, players)
    this.dukeMoney = function() {
        console.log("Duke Money")
        this.nextTurn()
    }
}

function Captain (players) {
    Influence.call(this, players)
    this.capSteal = function() {
        console.log("Captain Steal")
        this.nextTurn()

    }
}

function Assassin (players) {
    Influence.call(this, players)
    this.assassinate = function() {
        console.log("Assassinate")
        this.nextTurn()

    }
}

function Contessa (players) {
    Influence.call(this, players)
    this.blockAssassin = function() {
        console.log("Block Assassin")
        this.nextTurn()
    }
}

function Inquisitor (players) {
    Influence.call(this, players)
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
            console.log("Skip")
            break;
        case "deck":
            console.log("Deck")
            break;
        case "bank":
            console.log("Bank")
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
// TESTS

let player = new Player("John")
let player2 = new Player("Kalen")
let player3 = new Player("Dylan")
let player4 = new Player("Chloe")
let player5 = new Player("Gabbie")
console.log(player)
console.log(player2)
console.log(player3)
console.log(player4)
console.log(player5)


// duke.dukeMoney()
// captain.capSteal()
// assassin.assassinate()
// contessa.blockAssassin()
// inquisitor.inquisite()
// duke.dukeMoney()
// captain.capSteal()

// console.log(duke)