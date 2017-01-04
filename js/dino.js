function Dino() {
  this.api_word = "";
  this.guessed = "";
}

Dino.prototype.checker = function(){
  var wordArray = this.api_word.split('');
  var letter = this.guessed;
  console.log(wordArray);
  console.log(letter);
  while(wordArray.indexOf(letter) !== -1){
    var current_index = wordArray.indexOf(letter);
    wordArray.splice(current_index, 1);
  }

};

exports.dinoModule = Dino;
