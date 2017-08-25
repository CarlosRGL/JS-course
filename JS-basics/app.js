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



///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/
