"use strict";

//document ready function
$(document).ready(function() {
  $(".showGame").hide(); //hides the game until start
  $(".wordGuess").hide();
  $(".writeUp").hide();
  start(); //starts the game
  reset(); //resets the game
  quit(); //exit game on quit
});

//starting defining variables and starting points
let currentQuestion = 0,
  score = 0,
  alphaB = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    guesses = [ ],
    guess = 10,
    words = ["vault7", "davinchi", "trojan", "fatVirus", "polymorphicVirus", "macroVirus","fileInfector", "browserHijacker", "directActionVirus","bootSectorVirus"],
    wins = 0,
    losses = 0,
    lives = 10,
    counter = 0,

    spacesInWord;

//creating the alphaB buttons ul list
let buttons = function() {
  myButtons = document.getElementById("buttons");
  letters = document.createElement("ul");

  for (let i = 0; i < alphaB.length; i++) {
    lettexrs.id =4r
  }
}

//DOM display of various words to guess
function wordsToGuess() {
  $(".wordsHere").html(`
    <legend>
      ${words[currentWord].word}
    </legend>
  `);
}

//get elements
let showingLives = document.getElementsById("")

//function to start game
function start() {
  $(".startGame").on("click", function(event) {
    event.preventDefault();
   $(".showGame").show();
    wordsToGuess();
  });
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
