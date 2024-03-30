const myHand = document.querySelectorAll(".myHand button")
const oponent = document.querySelector(".oponent button")
const oponentPlace = document.querySelector(".oponent_place")
const myselfPlace = document.querySelector(".myself_place")

const game = {
    on: false,
    time: 1000,
    mypoints: 0,
    oponentpoints: 0
}

start()

update()

function update() {

    myselfPlace.querySelector("p").innerHTML = game.mypoints
    oponentPlace.querySelector("p").innerHTML = game.oponentpoints

}

function start() {
    const name = prompt("Qual é o seu nome ?")

    myselfPlace.querySelector("h2").innerHTML = name
}



myHand.forEach(button => {
    button.addEventListener("click", () => {
        if (game.on) return
        button.classList.add("clicked")
        game.on = true
        setTimeout(() => {
            verification(button)
        }, game.time)
    })
})

function verification(myHand) {
    const hands = ["rock", "paper", "scissors"]
    const numRandom = Math.round(Math.random() * 2)
    oponent.querySelector("i").classList.add(`fa-hand-${hands[numRandom]}`)

    checkWinner(myHand, hands[numRandom])
    update()
    setTimeout(() => {
        clean()
    }, 3000)
}

function checkWinner(myHand, oponentHand) {

    if (myHand.id === oponentHand) {
        myHand.classList.add("draw")
        oponent.classList.add("draw")
        return
    }

    if (myHand.id == "rock") {
        if (oponentHand != "paper") {
            winForMe(myHand)
            return
        } else {
            winForOponent(myHand)
            return
        }
    }

    if (myHand.id == "paper") {
        if (oponentHand != "scissors") {
            winForMe(myHand)
            return
        } else {
            winForOponent(myHand)
            return
        }
    }

    if (myHand.id == "scissors") {
        if (oponentHand != "rock") {
            winForMe(myHand)
            return
        } else {
            winForOponent(myHand)
            return
        }
    }


}

function clean() {
    myHand.forEach(button => {
        button.className = "hand"
    })
    oponent.className = "hand"
    oponent.querySelector("i").className = `fa`

    game.on = false
}

function winForMe(myHand) {
    myHand.classList.add("win")
    oponent.classList.add("lose")
    game.mypoints++
}

function winForOponent(myHand) {
    myHand.classList.add("lose")
    oponent.classList.add("win")
    game.oponentpoints++
}