'use strict'

// words to guess and setting up alphabet
var wordBank = [
  'vault7',
  'davinchi',
  'trojan',
  'fatVirus',
  'polymorphicVirus',
  'macroVirus',
  'fileInfector',
  'browserHijacker',
  'directActionVirus',
  'bootSectorVirus'
]

var alphaB = 'abcdefghijklmnopqrstuvwxyz'.split('')

// starting defining global variables and starting points

// stored guesses of users
let guesses = []
let wrongGC = 0

// for incrementing number of guesses
let guessNum = 0

// start with 0 wins counter
let wins = 0

// start 0 losses counter
let losses = 0

// empty arrays for guessing words
let displayWord = []
let wrongGuess = []
let hiddenWord = []

// function to start game when a player presses something
// takes user's response and saves it to a lower case string
// checks if the user enters something other than a letter
// if the user's guess is not correct do the following actions
// find if the correct letter was guessed

document.onkeyup = (event) => {
  event.preventDefault()
	let userResp = String.fromCharCode(event.keyCode).toLocaleLowerCase()
	if (alphaB.indexOf(userResp) === -1) {
    return
	}
  if (guesses.indexOf(userResp) === -1) {
    guesses.push(userResp)
		if (checkLetters(userResp)) {
      wrongGuess.push(userResp)
			guessNum--
		}
  }
  wordtoGuess()
};

// function for starting the actual game intialize all variables to a starting point of zero and no guesses yet
// plus set up the underscores
function startGame () {
  guessNum = 7
	guesses = []
	wrongGuess = []
	wrongGC = 0

	hiddenWord = wordBank[Math.random() * wordBank.length].toLowerCase()
	displayWord = hiddenWord.split('').map((letter) => {
    return '_'
	})

	document.getElementsByClassName('underscores').innerHtml = displayWord.join(' ')

	document.getElementById('guesses').innerHTML = wrongGuess.join(' ')
}

// function to find out if the guesses are correct for each word
function checkGuesses (userResp) {
  for (var i = 0; i < displayWord.length; i++) {
    if (hiddenWord[i] === userResp) {
      displayWord[i] === userResp
			wrongGuess = false
		} else {
      let wrongGuess = true
			wrongGC++
		}
  }
  return wrongGuess
}

// function to start the next round of games
function wordtoGuess () {
  // show the user their game stats of guesses
  document.getElementById('guesses').innerHTML = guessNum
	document.getElementsByClassName('underscores').innerHTML = displayWord.join(' ')
	document.getElementById('losses').innerHTML = wrongGC.join(' ')

	if (displayWord.indexOf('_') === -1) {
    wins++
		alert(`You guessed the word correctly: hid${hiddenWord}`)
		document.getElementById('wins').innerHTML = wins
		startGame()
	} else if (guessNum <= 0) {
    losses++
		alert(`Lulz the word was ${hiddenWord}`)
		document.getElementById('wrongGuessCount').innerHTML = losses
	}
  startGame()
}

// function to reset the game
function resetGame () {
  document.getElementsByClassName('resetGame').addEventLister('click', function () {
    startGame()
	})
}

// function to quit game
function quitGame () {
  document.getElementsByClassName('quitGame').addEventLister('click', function () {
    window.location.href = 'https://github.com/allisonsnipes'
	})
}
