# Code-Quiz
Coding Assessment designed to reflect a real world application of something an applicant may encounter during the interview process. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Assessment</title>
    <link rel="stylesheet" href ="index.css" />
</head>
<body>
    <header class="container" id="beginning">
        <h1 class="welcome">Welcome to Speed Reader</h1>
        <h2>Coding Quiz Challenge:</h2>
        <h3>Try to Answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score & time by ten seconds!</h3>
        <h4>When question appears, click to input answer. Type Enter once you have submitted your answer.</h4>
        <button type= "onclick" id="startbutton">Start</button> 
        <h5 id="countdown"></h5>
        </header>
<br>
<br>
<br>        
<aside id="GameTime"></aside>
<section >
    <p id="QandA"></p>
    <ul id="Q1"></ul>
    <div id="A1"></div>
    <ul id="Q2"></ul>
    <div id="A2"></div>
    <ul id="Q3"></ul>
    <div id="A3"></div>
    <ul id="Q4"></ul>
    <div id="A4"></div>
    <ul id="Q5"></ul>
    <div id="A5"></div>
</section>

<main>
    <div id="main">
    <Form></Form>
</div>
</main>

<br>
<br>
<br>
    <section>
        <div>All done!</div>
        <ul>Your final score is </ul> 
        <ul>Enter initials:</ul> 
    
        <p>Highscores
            <br>
            <button class="Go-Back">Go Back</button>
            <button class="Clear-Highscores">Clear Highscores</button>
        </p> 
    </section>
      <script src="script.js"></script>
</body>
</html>

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

var wins=0;
var losses=0;
var ties=0;

var time = 65;

var form = document.querySelector("form");
var input = document.querySelector("input");
var timerEl = document.getElementById("countdown");
var BEGINS = document.getElementById("countdown1");
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

function startgame () {
    Startbutton.addEventListener("click", function () {
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time + " seconds left till test over!";
        if(time === 60) {
            sendtime1();
            sendtime2();
            sendtime3();
            sendtime4();
            sendtime5();
        }if(time === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = ("");
        }
    }, 1000);
})}

startgame()


function sendtime1 () {
    Q1El.textContent = Question1;
    let txt = "";
    Answers1.forEach(myFunction);
    document.getElementById("A1").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    } 
    
    document.addEventListener ("click", function () {
        var form = document.createElement("form");
        var input = document.createElement("input");
    
        form.appendChild(input);
        A1.appendChild(form);
        
    })
    
};

function sendtime2 () {
    Q2El.textContent = Question2;
    let txt = "";
    Answers2.forEach(myFunction);
    document.getElementById("A2").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }

    document.addEventListener ("click", function () {
        var form = document.createElement("form");
        var input = document.createElement("input");
    
        form.appendChild(input);
        A2.appendChild(form);
    })
};
function sendtime3 () {
    Q3El.textContent = Question3;
    let txt = "";
    Answers3.forEach(myFunction);
    document.getElementById("A3").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }

    document.addEventListener ("click", function () {
        var form = document.createElement("form");
        var input = document.createElement("input");
    
        form.appendChild(input);
        A3.appendChild(form);
    })
};
function sendtime4 () {
    Q4El.textContent = Question4;
    let txt = "";
    Answers4.forEach(myFunction);
    document.getElementById("A4").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }

    document.addEventListener ("click", function () {
        var form = document.createElement("form");
        var input = document.createElement("input");
    
        form.appendChild(input);
        A4.appendChild(form);
    })
};
function sendtime5 () {
    Q5El.textContent = Question5;
    let txt = "";
    Answers5.forEach(myFunction);
    document.getElementById("A5").innerHTML = txt;
    function myFunction(value) {
        txt += "-" + value + "<br>"
    }

    document.addEventListener ("click", function () {
        var form = document.createElement("form");
        var input = document.createElement("input");
    
        form.appendChild(input);
        A5.appendChild(form);
    })
};

//Need a form to submit inputs
//Need a function for timer reset upon submit
//Need a function to cause timer to reduce in time by 10 seconds for every wrong answer.
 
![image](https://user-images.githubusercontent.com/84113171/125724542-28f33658-fa28-4373-81ab-f8adbc2d00b6.png)

