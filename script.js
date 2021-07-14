var Question1 = "Commonly used data types DO NOT Include:";
var Answers1 = ["Strings", "Booleans", "Alerts", "Numbers"];
var Question2 = "The condition in an if/else statement is enclosed within __.";
var Answers2 = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"];
var Question3 = "Arrays in JavaScript can be used to store __.";
var Answers3 = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"];
var Question4 = "String values must be enclosed within __ when being assigned to variables.";
var Answers4 = ["Commas", "Curly Brackets", "Quotes", "Parentheses"];
var Question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";
var Answers5 = ["JavaScript", "Terminal/bash", "For Loops", "Console.Log"];

var time = 5;
var timerEl = document.getElementById("countdown");
var Q1El = document.getElementById("Q1");
var A1El = document.getElementById("A1");
var Q2El = document.getElementById("Q2");
var A2El = document.getElementById("A2");
var Q3El = document.getElementById("Q3");
var A3El = document.getElementById("A3");
var Q4El = document.getElementById("Q4");
var A4El = document.getElementById("A4");
var Q5El = document.getElementById("Q5");
var A5El = document.getElementById("A5");
var Startbutton = document.getElementById("startbutton");
var Firstbutton = document.getElementById("First");

Startbutton.addEventListener("click", function () {
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time + " seconds left till test over!";
        if(time === 0) {
            sendtime1();
            sendtime2();
            sendtime3();
            sendtime4();
            sendtime5();
            //Answer1();
            clearInterval(timerInterval);
            timerEl.textContent = ("");
        }
    }, 1000);
});

function sendtime1 () {
    Q1El.textContent = Question1;
    let txt = "";
    Answers1.forEach(myFunction);
    document.getElementById("A1").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }
};

function sendtime2 () {
    Q2El.textContent = Question2;
    let txt = "";
    Answers2.forEach(myFunction);
    document.getElementById("A2").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }
};
function sendtime3 () {
    Q3El.textContent = Question3;
    let txt = "";
    Answers3.forEach(myFunction);
    document.getElementById("A3").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }
};
function sendtime4 () {
    Q4El.textContent = Question4;
    let txt = "";
    Answers4.forEach(myFunction);
    document.getElementById("A4").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }
};
function sendtime5 () {
    Q5El.textContent = Question5;
    let txt = "";
    Answers5.forEach(myFunction);
    document.getElementById("A5").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }
};













//var QA1 = function () {
  //  var userchoice = Answer1[i];
//}