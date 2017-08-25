///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :) */


//Ages
const JOHN_AGE = 20;
const FRIEND_AGE = 28;
const FRIEND_2_AGE = 28;

//Heights
const JOHN_HEIGHT = 175;
const FRIEND_HEIGHT = 187;
const FRIEND_2_HEIGHT = 28;

//Scores
let score_john = JOHN_HEIGHT + (JOHN_AGE * 5);
let score_friend = FRIEND_HEIGHT + (FRIEND_AGE * 5);
let score_friend_2 = FRIEND_2_HEIGHT + (FRIEND_2_AGE * 5);

//Logic
if (score_john > score_friend && score_john > score_friend_2) {
    console.log('john wins');
} else if (score_john < score_friend && score_friend_2 < score_friend) {
    console.log('friend wins');
} else if (score_john < score_friend_2 && score_friend < score_friend_2) {
    console.log('friend 2 wins');
} else {
    console.log('draw');
}
