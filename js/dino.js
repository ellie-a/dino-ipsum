function Dino() {
  this.api_word = "";
  this.guessed = "";
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Dino.prototype.checker = function(){
  var wordArray = this.api_word.split('');
  var letter = this.guessed.toLowerCase();
  var dinoResult = new Array(wordArray.length);

  while(wordArray.indexOf(letter) !== -1){
    var current_index = wordArray.indexOf(letter);
    wordArray.splice(current_index, 1);
    dinoResult.insert(current_index, letter);
  }
  console.log(dinoResult);
};

exports.dinoModule = Dino;
