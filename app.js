'use strict';
//These are my first five questions, all of which are yes/no answers

var userName = prompt('Thanks for taking a look at my About Me page! What is your name?');
alert('Hi, ' + userName + ', nice to meet you! See if you can guess right on these questions about me!! For each question, please answer with a \'yes\' or \'no\'!');
console.log(userName + ' is the user\'s name');

var myNationality = prompt('Am I of mostly Polish descent?').toLowerCase();

if (myNationality === 'yes' || myNationality === 'y'){
  alert('You are correct!! I am mostly Polish, with some Russian, English, and French thrown in too');
}else{
  alert('Sorry, you are incorrect, I in fact descend from Poles');
}
console.log(userName + ' answered ' + myNationality + ' to whether Matt is Polish or not');

var myBirthplace = prompt('Was I born in Washnington state?').toLowerCase();

if (myBirthplace === 'no' || myBirthplace === 'n'){
  alert('Nice job!! I was born in Roanoke, Virginia');
}else{
  alert('Sorry, I actually moved to Washington when I was 5! I was born in Virginia');
}
console.log(userName + ' answered ' + myBirthplace + ' to whether Matt was born in WA');

var mySport = prompt('Is wrestling my favorite sport?').toLowerCase();

if (mySport === 'no' || mySport === 'n'){
  alert('That\'s right, great guess! While I am best at wrestling and compete at the collegiate level, my actual favorite sport to play and watch is soccer!');
}else{
  alert('Sorry, you are incorrect, while I am best at wrestling, soccer has always interested me more!');
}
console.log(userName + ' answered ' + mySport + ' to whether wrestling was Matt\'s favorite sport');

var myMovies = prompt('Is the Lord of the Rings my favorite movie franchise?').toLowerCase();

if (myMovies === 'no' || myMovies === 'n'){
  alert('Awesome work!! While I do have a replica of Sting hanging on my bedroom wall, my favorite movie series of all time is Star Wars, ever since I was a kid!');
}else{
  alert('Sorry, I do love LOTR a lot, like enough to own a replica of Sting, but my favorite movie series of all time is Star Wars, ever since I was a kid! Can\'t wait for Episode VIII!');
}
console.log(userName + ' answered ' + myMovies + ' to whether Matt loved Lord of the Rings most out of all movies');

var myFood = prompt('Is sushi my favorite food?').toLowerCase();

if (myFood === 'yes' || myFood === 'y'){
  alert('Of course!!! I could eat sushi every day!');
}else{
  alert('Sorry, I could probably eat pizza every day too, but sushi is just too good');
}
console.log(userName + ' answered ' + myFood + ' to whether Matt\'s favorite food is sushi');


// This is my 6th question, which gives 4 guesses to guess a numerical answer

for (i = 0; i < 4;i++){

  var myWrestling = parseInt(prompt('Can you guess how many matches I lost during my high school senior year wrestling season? You have 4 tries to guess it right!'));

  if (myWrestling < 0){
    alert('You are too low, try again!');

  } if (myWrestling === 0){
    alert('You are correct! I went undefeated in my senior year season, eventually earning my second State Championship title to cap off my best season ever!');
    break;

  } if (myWrestling > 0){
    alert('You are guessing too high, try another guess!');

  } if (i >= 3) {
    alert('You are out of guesses, the correct answer was zero! I went undefeated in my senior year season, eventually earning my second State Championship title to cap off my best season ever!');
    break;
  }
}


//This is question 7, which involves an array of multiple correct answers, with only 6 tries

var counter = 0;

var myCountries = ['mexico', 'canada', 'aruba', 'france'];
var countryQuestion = prompt('What is one country I\'ve been to outside of the USA? You have 6 tries to guess one right!').toLowerCase();

if(countryQuestion === 'mexico' || 'canada' || 'aruba' || 'france'){
  alert('Nice work!');
}
else {
  alert('Try again!');
}
if (counter >= 6) {
  alert('Sorry, you are out of tries, I have been to Mexico, Canada, Aruba, and France!');
}
