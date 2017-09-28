// // function contructor

// var john = {
//   name: "John",
//   yearOfBirth: 1988,
//   job: "developer"
// };

// // function constructor
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// // always pass methods in the prototype property of the constructor
// Person.prototype.calculateAge = function() {
//   console.log(2016 - this.yearOfBirth);
// };

// // we can do the same with property NOT COMMON
// Person.prototype.lastName = "Smith";

// // instance of the object Person
// var john = new Person("John", 1988, "teacher");

// john.calculateAge();

// // Primitives vs Objects

// // Primitives
// var a = 23;
// var b = a;
// a = 46;

// console.log(a); // 46
// console.log(b); // 23

// // Objects
// var obj1 = {
//   name: "John",
//   age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age); // 30 because passed by reference
// console.log(obj2.age); // 30 because passed by reference

// // Functions

// var age = 28;
// var obj = {
//   name: "Carlos",
//   city: "Marseille"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "San Francisco";
// }

// console.log(age); // 28
// console.log(obj.city); // San francisco

// ////////////////////////////////////////////////////////
// // Passing functions as arguments

// var years = [1990, 2009, 1988, 1999, 2017, 2018];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// // this is a function callback
// function calculateAge(el) {
//   return 2016 - el;
// }

// // this is a function callback
// function isFullAge(el) {
//   return el >= 18;
// }

// // this is a function callback
// function maxHearthRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHearthRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// ////////////////////////////////////////////////////////
// // Passing functions returning functions

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + "you are a designer");
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log(name + "you are a teacher");
//     };
//   } else {
//     return function(name) {
//       console.log(name + "you are nothing");
//     };
//   }
// }

// // Closures

// function retirement(retirementAge) {
//   return function(yearOfBirth) {
//     var a = " years left until retirement";
//     var age = 2017 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// retirementUS(1988);
// retirement(66)(1988);

// var retirementGermany = retirement(65);
// var retirementSpain = retirement(67);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "designer") {
//       console.log(name + "you are a designer");
//     } else if (job === "teacher") {
//       console.log(name + "you are a teacher");
//     } else {
//       console.log(name + "you are nothing");
//     }
//   };
// }

// bind call apply
// TODO

//1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)

// 2. Create a couple of questions using the constructor

// 3. Store them all inside an array

// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
  // constructor
  var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  Question.prototype.displayAnswer = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log([i] + ". " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    if (ans === this.correct) {
      var sc;
      console.log("you won");
      sc = callback(true);
    } else {
      console.log("lose");
      sc = callback(false);
    }

    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("your current score is : " + score);
    console.log("-------------------------------------------");
  };

  var firstQuestion = new Question(
    "cual es mi nombre?",
    ["carlos", "juan", "pedro"],
    0
  );
  var secondQuestion = new Question(
    "cual es mi profesion?",
    ["dev", "tester", "backend"],
    0
  );
  var trithQuestion = new Question(
    "como se llama mi hijo?",
    ["carlos", "juan", "diego"],
    2
  );

  var questions = [firstQuestion, secondQuestion, trithQuestion];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayAnswer();
    var answer = prompt("select answer");

    if (answer !== "exit") {
      questions[n].checkAnswer(answer, keepScore);
    }
    nextQuestion();
  }

  nextQuestion();
})();

// (function() {
//   var Question = function name(question, answer, correctAnswer) {
//     this.question = question;
//     this.answer = answer;
//     this.correctAnswer = correctAnswer;
//   };

//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);

//     for (var i = 0; i < this.answer.length; i++) {
//       console.log(i + ": " + this.answer[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function(ans) {
//     if (ans === this.correctAnswer) {
//       console.log("you won");
//     } else {
//       console.log("you loose");
//     }
//   };

//   var firstQuestion = new Question(
//     "cual es mi nombre?",
//     ["carlos", "juan", "pedro"],
//     0
//   );
//   var secondQuestion = new Question(
//     "cual es mi profesion?",
//     ["dev", "tester", "backend"],
//     0
//   );
//   var trithQuestion = new Question(
//     "como se llama mi hijo?",
//     ["carlos", "juan", "diego"],
//     2
//   );

//   var allQuestions = [firstQuestion, secondQuestion, trithQuestion];

//   var n = Math.floor(Math.random() * allQuestions.length);

//   allQuestions[n].displayQuestion();

//   var answers = parseInt(prompt("select numero:"));

//   allQuestions[n].checkAnswer(answers);
// })();
