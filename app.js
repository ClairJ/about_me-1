'use strict';
// OR is ||
// and is &&

//Introduction
// var userName = prompt('Excelsior! What is your name?');
//
// alert('Hi, ' + userName + '! Nice to meet you. See if you can get the correct answer to the following questions about me.')

//Question One
var answer1 = prompt('Do I have any pets?').toLowerCase();
console.log('Answer to question one was ' + answer1);
if (answer1 === 'y' || answer1 === 'yes') {
alert('Ding ding ding! You are correct! I have two munchkin cats.')
} else {
alert('BZZZZZT. Wrong! I have two munchkin cats.')
}

//Question Two
var answer2 = prompt('Do I like bananas?').toLowerCase();
console.log('Answer to question two was ' + answer2);
if (answer2 === 'n' || answer2 === 'no'){
  alert('Correct! Hate them, with the one exception of a fried peanut butter and banana sandwich.')
} else {
  alert('Sorry! I hate them. I know it\'s weird. :\(')
}

//Question Three
var answer3 = prompt('Have I ever lived in another country?')
console.log('Answer to question three was ' + answer3);
if (answer3 === 'y' || answer3 === 'yes'){
  alert('You\'re right! I lived in Hungary for a few months earlier this year. Super tired of paprika.')
} else {
  alert('Bocsanat, nem! I lived in Hungary for a few months earlier this year. Super tired of paprika.')
}
