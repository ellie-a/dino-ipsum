var Dino = require('./../js/dino.js').dinoModule;

$(document).ready(function() {
  var api_word = "";
  var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1'),
    fillContainer = function(html) {
      $('#ipsum').text(html);
      api_word = getDinos.responseJSON[0][0];
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    };

    getDinos.then(fillContainer, oops);
    console.log(api_word);
    var newDino = new Dino(api_word);

    $('#start-game').click(function() {
      newDino['api_word'] = getDinos.responseJSON[0][0];
      newDino.startGame();
      $('.game').show();
      $('#start-game').hide();
      console.log(newDino.api_word);
      console.log(newDino);
    });

    $('#guessForm').submit(function(event) {
      event.preventDefault();
      var turnCounter = this.turnCounter;
      var guessed = $('#guessedLetter').val();
      $('#guessedLetter').val('');
      if (newDino.validator(guessed)){
        $('#answers').text(newDino.checker().join(''));
      }

      $('#guessedLetters').text(newDino['wrongLetters'].join(' '));
      if (newDino['guessCount'] === 6 && newDino.turnCounter !== 0) {
        $('.head').show();
        turnCounter++;
      } else if (newDino['guessCount'] === 5 && newDino.turnCounter !== 0) {
        $('.head').show();
        $('.neck').show();
      } else if (newDino['guessCount'] === 4 && newDino.turnCounter !== 0) {
        $('.head').show();
        $('.neck').show();
        $('.chest').show();
      } else if (newDino['guessCount'] === 3 && newDino.turnCounter !== 0) {
        $('.head').show();
        $('.neck').show();
        $('.chest').show();
        $('.torso').show();
      } else if (newDino['guessCount'] === 2 && newDino.turnCounter !== 0) {
        $('.head').show();
        $('.neck').show();
        $('.chest').show();
        $('.torso').show();
        $('.leg').show();
      } else if (newDino['guessCount'] === 1 && newDino.turnCounter !== 0) {
        $('.head').show();
        $('.neck').show();
        $('.chest').show();
        $('.torso').show();
        $('.leg').show();
        $('.tail').show();
      } else if (newDino['guessCount'] === 0 && newDino.turnCounter !== 0) {
        $('.head').show();
        $('.neck').show();
        $('.chest').show();
        $('.torso').show();
        $('.leg').show();
        $('.tail').show();
        $('.dead').show();
        $('#ipsum').show();
      }

      this['turnCounter'] = turnCounter;
      newDino.winner();
    });

    $('#new-game').click(function() {
      location.reload();
    });


});
