var Dino = require('./../js/dino.js').dinoModule;


$(document).ready(function() {
  var api_word = "";
  var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1'),
    fillContainer = function(html) {
      $('#ipsum').text(html);
      api_word = getDinos.responseJSON[0][0];
      console.log(api_word);
      console.log(getDinos.responseJSON[0][0]);
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    };

    getDinos.then(fillContainer, oops);

    var newDino = new Dino(api_word);

    $('#submit').click(function(){
      var guessed = $('#guessedLetter').val();
      newDino['api_word'] = getDinos.responseJSON[0][0];
      newDino['guessed'] = guessed;
      console.log(newDino);
      newDino.checker();
    });

});
