/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//declare variables
let scores, dice, actualPlayer, buttonDice, score0, currentValue;

scores = [0,0];
actualPlayer = 0;
currentValue = 0;
buttonDice = document.querySelector(".btn-roll");
dice = document.querySelector(".dice");
score0 = document.getElementById('current-0');

//eventListener when click roll dice button
buttonDice.addEventListener("click", function() {

    //calculate dice value
    diceValue = Math.floor(Math.random() * 6 + 1);

    //change dice
    dice.src = 'dice-' + diceValue + '.png';

    //add value to current score
    if (diceValue !== 1) {
        currentValue += diceValue;
        document.querySelector('#current-' + actualPlayer).textContent = currentValue;
    } else {
        nextPlayer();
    }
});
