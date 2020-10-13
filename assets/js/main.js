let currentTurn = 1
let players = 5;
let gameStart = false;
let coupMode = false;
let dukeMode = false;
let assassinMode = false;



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


    // d1.innerHTML = "asdas"
    // d2.innerHTML = influenceArray[1]
    // d3.innerHTML = influenceArray[2]

    let p11 = document.querySelector("#p1-1")
    let p12 = document.querySelector("#p1-2")

    let p21 = document.querySelector("#p2-1")
    let p22 = document.querySelector("#p2-2")

    let p31 = document.querySelector("#p3-1")
    let p32 = document.querySelector("#p3-2")

    let p41 = document.querySelector("#p4-1")
    let p42 = document.querySelector("#p4-2")
1
    
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
    document.querySelector("#coupButton").style.background = ""
    player.money -= 7
    updateMoney()

    nextTurn()
    } else if (coupMode == true && assassinMode == true) {

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
        player.money -= 3
        updateMoney()
        nextTurn()
    }else {
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
    assassinMode = false;


    let player = document.querySelector("#playerTurn")
    player.innerHTML = `Player ${currentTurn}'s turn`


    document.querySelector("#duke").style.border = ""
    document.querySelector("#captain").style.border = ""
    document.querySelector("#assassin").style.border = ""
    document.querySelector("#contessa").style.border = ""
    document.querySelector("#inquisitor").style.border = ""
}

function capSteal(event) {

    let player = playerArray.find(user => user.turn === currentTurn)
    
    switch (event.currentTarget.id) {
        case "one":
            player1.money -= 2
            player.money += 2
            updateMoney()
            nextTurn()
            break;
        case "two":
            player2.money -= 2
            player.money += 2
            updateMoney()
            nextTurn()
            break;
        case "three":
            player3.money -= 2
            player.money += 2
            updateMoney()
            nextTurn()
            break;
        case "four":
            player4.money -= 2
            player.money += 2
            updateMoney()
            nextTurn()
            break;
        case "five":
            player5.money -= 2
            player.money += 2
            updateMoney()
            nextTurn()
            break;
        default:
            console.log("you must choose a player")
            return;
    }


}

function clickHandler(event) {

    let p1 = document.querySelector("#one")
    let p2 = document.querySelector("#two")
    let p3 = document.querySelector("#three")
    let p4 = document.querySelector("#four")
    let p5 = document.querySelector("#five")
    
   if (dukeMode === true) {
       switch (event.target.id) {
           case "bank":
               break;
            default: 
            return;
            break;
       }
   }
   if (assassinMode === true) {
    switch (event.currentTarget.id) {
        case "playerBox":
            break;
         default: 
         return;
         break;
    }
}

     // if player has >= $10, they MUST coup 
     let player = playerArray.find(user => user.turn === currentTurn)

     if (assassinMode == true) {
         console.log("You must assassinate")
         return;
     }
     if (player.money >= 10) {
         switch (event.target.id) {
            case "coupButton":
                coupMode = true; 
                break;
            default:
                console.log("You must click the coup button")
                document.querySelector("#coupButton").style.background = "red";
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
            
            event.target.style.border = "1px dashed red"
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

            event.target.style.border = "1px dashed red"
        
            p1.addEventListener("click", capSteal)
            p2.addEventListener("click", capSteal)
            p3.addEventListener("click", capSteal)
            p4.addEventListener("click", capSteal)
            p5.addEventListener("click", capSteal)
            break;
        case "assassin":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }
            
            if (player.money < 3) {
                console.log("You don't have enough money to assassinate!")
                return;
            }

            event.target.style.border = "1px dashed red"
            coupMode = true;
            assassinMode = true

            p1.addEventListener("click", coup)
            p2.addEventListener("click", coup)
            p3.addEventListener("click", coup)
            p4.addEventListener("click", coup)
            p5.addEventListener("click", coup)

            console.log("Assassin Mode")
            break;
        case "contessa":
            if (gameStart == false) {
                return
            }

            if (coupMode == true) {
                return
            }
            event.target.style.border = "1px dashed red"
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

            event.target.style.border = "1px dashed red"
            console.log("Challenge")
            break;
        case "coupButton":

            if (gameStart == false) {
                return
            }

            event.target.style.border = "1px dashed red"
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
                document.querySelector("#deckState").innerHTML = "Deck"
                console.log("Game start!")
                let d1 = document.querySelector("#d1")
                let d2 = document.querySelector("#d2")
                let d3 = document.querySelector("#d3")
    
                d1.innerHTML = influenceArray[0]
                d2.innerHTML = influenceArray[1]
                d3.innerHTML = influenceArray[2]

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

