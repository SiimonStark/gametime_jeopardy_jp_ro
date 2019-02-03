// This is the JavaScript entry file - your code begins here
// ! Do not delete or rename this file !

// Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';

// Tell webpack to use a JS file
import './domUpdates';
import './Question';
import './GameBoard';
import './Players';
import './Round';
import './DailyDouble';

import './css/base.css';
import domUpdates from './domUpdates';
import Question from './Question';
import GameBoard from './GameBoard';
import Players from './Players';
import Round from './Round';
import DailyDouble from './DailyDouble';

import $ from 'jquery';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/bg-image.jpg';
import './images/bg2.png';
import './images/bulbasaur.png';
import './images/charmander.png';
import './images/Squirtle.png';
import './images/Oak2.png';

// * This is the JavaScript entry file - your code begins here. *

console.log("start")

$('.col').click(function (e) {
  $(e.target).css('visibility', 'hidden');
});

$('.start--button').click(function (e) {
  e.preventDefault();
  $(".overlay").children().fadeToggle(600, "swing");
});

$(".start--button").click(function (e) {
  $(".overlay").remove();
  $('.start-up').remove();
});
$('.col').click(function (e) {
  $('.question-container').css('visibility', 'visible')
})