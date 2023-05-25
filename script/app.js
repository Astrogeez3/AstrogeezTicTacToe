const gameData = [
[0,0,0],
[0,0,0],
[0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name:'',
    symbol:'O'
  },
];

const playerConfigOverlayElement = document.getElementById("config-ovrerlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-errors");
const theGameSectionId = document.getElementById('active-game');
const  activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElemenet = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElemenet = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-button");
const startButtonGame = document.getElementById('start-btn');
const GameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElemenet.addEventListener("click", openPlayerconfig);
editPlayer2BtnElemenet.addEventListener("click", openPlayerconfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startButtonGame.addEventListener('click',theGameButton);

for(const GameFieldElement of GameFieldElements){
    GameFieldElement.addEventListener('click',selectGameField);
}