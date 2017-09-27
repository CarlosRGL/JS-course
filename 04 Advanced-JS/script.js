// function contructor

var john = {
  name: "John",
  yearOfBirth: 1988,
  job: "developer"
};

// function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// always pass methods in the prototype property of the constructor
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

// we can do the same with property NOT COMMON
Person.prototype.lastName = "Smith";

// instance of the object Person
var john = new Person("John", 1988, "teacher");

john.calculateAge();

// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
  name: "John",
  age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age); // 30 because passed by reference
console.log(obj2.age); // 30 because passed by reference

// Functions

var age = 28;
var obj = {
  name: "Carlos",
  city: "Marseille"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

console.log(age); // 28
console.log(obj.city); // San francisco

////////////////////////////////////////////////////////
// Passing functions as arguments

var years = [1990, 2009, 1988, 1999, 2017, 2018];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// this is a function callback
function calculateAge(el) {
  return 2016 - el;
}

// this is a function callback
function isFullAge(el) {
  return el >= 18;
}

// this is a function callback
function maxHearthRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHearthRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

////////////////////////////////////////////////////////
// Passing functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + "you are a designer");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + "you are a teacher");
    };
  } else {
    return function(name) {
      console.log(name + "you are nothing");
    };
  }
}

// Closures

function retirement(retirementAge) {
  return function(yearOfBirth) {
    var a = " years left until retirement";
    var age = 2017 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1988);
retirement(66)(1988);

var retirementGermany = retirement(65);
var retirementSpain = retirement(67);

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + "you are a designer");
    } else if (job === "teacher") {
      console.log(name + "you are a teacher");
    } else {
      console.log(name + "you are nothing");
    }
  };
}
