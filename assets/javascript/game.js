"use strict";

//words to guess and setting up alphabet
var wordBank = [
  "vault7", 
  "davinchi", 
  "trojan", 
  "fatVirus", 
  "polymorphicVirus", 
  "macroVirus", 
  "fileInfector", 
  "browserHijacker", 
  "directActionVirus", 
  "bootSectorVirus"
];

var alphaB = 'abcdefghijklmnopqrstuvwxyz'.split('');

//starting defining global variables and starting points
let guesses = [], //stored guesses of users
  guessNum = 0, //stores guess count limit 10
  wins = 0, //start with 0 wins counter
  losses = 0, //start 0 losses counter
  displayWord = [],
  wrongGuess = [],
  hiddenWord = [];

//function to start game when a player presses something
document.onkeyup = (event) => {
  event.preventDefault();
    //takes user's response and saves it to a lower case string
    let userResp = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    //checks if the user enters something other than a letter  
    if (alphaB.indexOf(userResp) === -1) {
      return 
    }

    if (guesses.indexOf(userResp))
}



function start() {
  $(".startGame").on("click", function (event) {
    event.preventDefault();
    $(".showGame").show();
    wordsToGuess();
  });
}

//creating the alphaB buttons ul list
let buttons = function() {
  myButtons = document.getElementById("buttons");
  letters = document.createElement("ul");

  for (let i = 0; i < alphaB.length; i++) {
    letters.id = "alphaB";
    list.document.createElement("li");
    list.id = "letters";
    list.innerHTML = alphaB[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }

//DOM display for words to guess connected to the ul element
result = function() {
  wordHolder = document.getElementById("hold");
    correctChoice = document.createElement("ul");

    for (let i = 0; i < words.length; i++) {
      correctChoice.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if(word[i] === "-") {
        guess.innerHTML = "-";
        spacesInWord = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess)//makes guesses populate
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
}

//creating the number lives and display that number
let showingLives = document.getElementsById("lives");

//displaying messages depending on # of lives
comments = function() {
  showingLives.innerHTML = lives + "left";
  if (lives < 1) {
    showingLives.innerHTML = "Lulz, you lost. Game over";
  }
  for (let i = 0; i < guesses.length; i++) {
    if (counter + space === guesses.length) {
      showingLives.innerHTML = "Congrats you win";
    }
  }
}

//onclick function for lives decrementing
check = function() {
  list.onclick = function() {
    let guess = (this.innerHTML);
    this.setAttribute("class", "active");
    this.onclick = null;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        guesses[i].innerHTML = guess;
        counter += 1;
      }
    }
    var k = (word.indexOf(guess));
    if (k === -1) {
      lives -= 1;
      comments();
    } else {
      comments();
    }
  }
}

//function to reset the game
$(".resetGame").on("click", function(event) {
  $(".showGame").hide();
})

//function to quit game
function quit() {
  $(".quitGame").on("click", function(event) {
    event.preventDefault();
    window.location.href = "https://github.com/allisonsnipes";
  });
}