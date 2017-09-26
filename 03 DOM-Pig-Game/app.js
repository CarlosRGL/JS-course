/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer = 0;

// hide dice from view at the start of the application and scores sets to 0
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// add event listener to the button to change number when clicking
document.querySelector(".btn-roll").addEventListener("click", function() {

  // 1. calculate a number between 1 - 6
  dice = Math.floor(Math.random() * 6 + 1);

  // 2. calculate result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  // 3. update the score IF the dice was NOT 1
  if (dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector(".current-" + activePlayer).textContent = roundScore;
  } else {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //set current score to 0
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //change active class player
    document.querySelector('.player-0-panel').classList.toogle('active');
    document.querySelector('.player-1-panel').classList.toogle('active');

    // Hide dice when next player turn
    document.querySelector('.dice').style.display = 'none';
}
});
