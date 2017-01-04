var Dino = require('./../js/dino.js').dinoModule;

$(document).ready(function() {
  var getDinos      = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=3'),
    fillContainer = function(html) {
      $('#ipsum').html(html);
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    };

getDinos.then(fillContainer, oops);


});
