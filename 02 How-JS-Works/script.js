///////////////////////////////////////
// Lecture: Hoisting

// functions

// This works because calculageAge() is a funcion declaration and is stored in the variable objet
calculageAge(1988);

function calculateAge(year) {
  console.log(2016 - year);
}


// this dont work because is a function expression and isnt stored in the variable objet
retirement(1990);

var retirement = function(year) {
  console.log(65 - (2016 - year));
};


//variables

console.log(age);  // this output 'undifined' because JS store variables in the variable objet as undefined;
var age = 28;
console.log(age);


///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
