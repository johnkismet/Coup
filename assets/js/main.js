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
    influenceArray.splice(choice, 1)
    return selection
} 



function Player () {
    this.influenceOne = getInfluenceCard()
    this.influenceTwo = getInfluenceCard()

}
let player = new Player()
let player2 = new Player()
let player3 = new Player()
let player4 = new Player()
console.log(player)
console.log(player2)
console.log(player3)
console.log(player4)

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

// TESTS

let duke = new Duke(5)
let captain = new Captain(5)
let assassin = new Assassin(5)
let contessa = new Contessa(5)
let inquisitor = new Inquisitor(5)


// duke.dukeMoney()
// captain.capSteal()
// assassin.assassinate()
// contessa.blockAssassin()
// inquisitor.inquisite()
// duke.dukeMoney()
// captain.capSteal()

// console.log(duke)