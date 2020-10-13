let currentTurn = 1
let players = 5;
let gameStart = false;
let coupMode = false;
let dukeMode = false;



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

function updateMoney() {
    let mon = document.querySelector("#money")
    let p1Text = document.querySelector("#p1")
    let p2Text = document.querySelector("#p2")
    let p3Text = document.querySelector("#p3")
    let p4Text = document.querySelector("#p4")
    let p5Text = document.querySelector("#p5")

    let p1 = playerArray.find(user => user.turn == 1)
    let p2 = playerArray.find(user => user.turn == 2)
    let p3 = playerArray.find(user => user.turn == 3)
    let p4 = playerArray.find(user => user.turn == 4)
    let p5 = playerArray.find(user => user.turn == 5)

    let player = playerArray.find(user => user.turn == currentTurn)

    mon.innerHTML = `$${player.money}`
    p1Text.innerHTML = `$${p1.money}`
    p2Text.innerHTML = `$${p2.money}`
    p3Text.innerHTML = `$${p3.money}`
    p4Text.innerHTML = `$${p4.money}`
    p5Text.innerHTML = `$${p5.money}`

}

function setInfluence() {
    let p1 = playerArray.find(user => user.turn == 1) 
    let p2 = playerArray.find(user => user.turn == 2) 
    let p3 = playerArray.find(user => user.turn == 3) 
    let p4 = playerArray.find(user => user.turn == 4) 
    let p5 = playerArray.find(user => user.turn == 5) 

    let p11 = document.querySelector("#p1-1")
    let p12 = document.querySelector("#p1-2")

    let p21 = document.querySelector("#p2-1")
    let p22 = document.querySelector("#p2-2")

    let p31 = document.querySelector("#p3-1")
    let p32 = document.querySelector("#p3-2")

    let p41 = document.querySelector("#p4-1")
    let p42 = document.querySelector("#p4-2")

    
    let p51 = document.querySelector("#p5-1")
    let p52 = document.querySelector("#p5-2")

    p11.innerHTML = p1.influenceOne
    p12.innerHTML = p1.influenceTwo

    p21.innerHTML = p2.influenceOne
    p22.innerHTML = p2.influenceTwo

    p31.innerHTML = p3.influenceOne
    p32.innerHTML = p3.influenceTwo

    p41.innerHTML = p4.influenceOne
    p42.innerHTML = p4.influenceTwo

    p51.innerHTML = p5.influenceOne
    p52.innerHTML = p5.influenceTwo

}

function coup(event) {

    let player = playerArray.find(user => user.turn === currentTurn)


    if (coupMode === true && player.money >= 7) {
        
    switch (event.target.id) {

        case "p1-1":
            event.target.style.background = "red"
            player1.faceDown1 = true;
            break;
        case "p1-2":
            event.target.style.background = "red"
            player1.faceDown2 = true;
            break;

        case "p2-1":
            event.target.style.background = "red"
            player2.faceDown1 = true;
            break;
        case "p2-2":
            event.target.style.background = "red"
            player2.faceDown2 = true;
            break;

        case "p3-1":
            event.target.style.background = "red"
            player3.faceDown1 = true;
            break;
        case "p3-2":
            event.target.style.background = "red"
            player3.faceDown2 = true;
            break;

        case "p4-1":
            event.target.style.background = "red"
            player4.faceDown1 = true;
            break;
        case "p4-2":
            event.target.style.background = "red"
            player4.faceDown2 = true;
            break;
        case "p5-1":
            event.target.style.background = "red"
            player5.faceDown1 = true;
            break;
        case "p5-2":
            event.target.style.background = "red"
            player5.faceDown2 = true;
            break;

            
    }

    player.money -= 7
    updateMoney()

    nextTurn()
    } else {
        console.log("You can't coup")
    }

}

function nextTurn() {
    if (currentTurn < players) {
        currentTurn++
    } else {
       currentTurn = 1; 
    }
    dukeMode = false;
    coupMode = false;


    let player = document.querySelector("#playerTurn")
    player.innerHTML = `Player ${currentTurn}'s turn`
}


function clickHandler(event) {
    
     // if player has >= $10, they MUST coup 
     let player = playerArray.find(user => user.turn === currentTurn)

     if (player.money >= 10) {
         switch (event.target.id) {
            case "coupButton":
                coupMode = true; 
                break;
            default:
                console.log("You must click the coup button")
                return
                break;
         }
     }

    switch (event.target.id) {
        case "duke":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            console.log("Duke Mode")
            dukeMode = true;
            break;
        case "captain":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            console.log("captain")
            break;
        case "assassin":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            console.log("assassin")
            break;
        case "contessa":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            console.log("contessa")
            break;
         case "inquisitor":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            console.log("inquisitor")
            break;
        case "challengeButton":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            console.log("Challenge")
            break;
        case "coupButton":

            if (gameStart == false) {
                return
            }

            if (player.money < 7) {
                console.log("You don't have enough money to coup")
                return;
            }

            console.log("Coup Mode")
            coupMode = true
           

            p1.addEventListener("click", coup)
            p2.addEventListener("click", coup)
            p3.addEventListener("click", coup)
            p4.addEventListener("click", coup)
            p5.addEventListener("click", coup)
            
            break;
        case "skip":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

            nextTurn()
            break;
        case "deck":
            
            if (gameStart == false) {
                document.querySelector("#deck").innerHTML = "Deck"
                console.log("Game start!")
                setInfluence()
                gameStart = true;
            }

            if (coupMode == true) {
                return
            }

            break;
        case "bank":
            if (gameStart == false) {
                return
            }
            
            if (dukeMode === true) {
                player.money += 3
                updateMoney()
                dukeMode = false;
            } else {
            player.income()
            updateMoney()
            }
           

            nextTurn()
            break;
        case "block":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }

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
let coupBtn = document.querySelector("#coupButton")
let block = document.querySelector("#block")
let skip = document.querySelector("#skip")

// middle section
let deck = document.querySelector("#deck")
let bank = document.querySelector("#bank")

 // players
 let p1 = document.querySelector("#one")
 let p2 = document.querySelector("#two")
 let p3 = document.querySelector("#three")
 let p4 = document.querySelector("#four")
 let p5 = document.querySelector("#five")

duke.addEventListener("click", clickHandler)
captain.addEventListener("click", clickHandler)
assassin.addEventListener("click", clickHandler)
contessa.addEventListener("click", clickHandler)
inquisitor.addEventListener("click", clickHandler)
challenge.addEventListener("click", clickHandler)
coupBtn.addEventListener("click", clickHandler)
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

