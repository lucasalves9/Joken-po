const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0
let gameOver = false


const playHuman = (humanChoice) => {

    if (gameOver) return

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNuber = Math.floor(Math.random() * 3)
    return choices[randomNuber]
}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + " Maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scisors' && machine === 'paper')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou a rodada! 🎉"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu ! 😢"
    }

    checkWinner()

}

const checkWinner = () => {
    if (humanScoreNumber === 3) {
        result.innerHTML = "🏆🎉 Você venceu a partida melhor de 5! Parabéns!"
        gameOver = true
    } else if (machineScoreNumber === 3) {
        result.innerHTML = "😢 A máquina venceu a partida melhor de 5!"
        gameOver = true
    }
}

const resetGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
    result.innerHTML = "Novo jogo iniciado. Faça sua jogada!"
    gameOver = false
}
