///////////////////////////////////////
// Lecture: Hoisting

// functions

// This works because calculageAge() is a funcion declaration and is stored in the variable object
calculageAge(1988);

function calculateAge(year) {
  console.log(2016 - year);
}

// this dont work because is a function expression and isnt stored in the variable object
retirement(1990);

var retirement = function(year) {
  console.log(65 - (2016 - year));
};

//variables

console.log(age); // this output 'undifined' because JS store variables in the variable object as undefined;
var age = 28;
console.log(age); //28

function foo() {
  var age = 65;
  console.log(age);
}

foo(); //65
console.log(age); //28

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}

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

// the this variable is only assigned a value when the objetct calls the method

console.log(this); // Output the window Object because is the nearest object that is attached to.

function calculageAge(year) {
  console.log(2016 - year);
  console.log(this); // Output the window Object because is the nearest object that is attached to.
}

var john = {
  name: "john",
  yearOfBirth: 1988,
  calculageAge: function() {
    console.log(this); // Output the John Object because is the nearest object that is attached to.

    function innerFunction() {
      console.log(this); // Output the window Object because is the nearest object that is attached to. (is a function, not a method)
    }
    innerFunction();
  }
};

john.calculageAge();

var mike = {
  name: 'mike',
  yearOfBirth: 1984
}

mike.calculageAge = john.calculageAge;
mike.calculageAge();