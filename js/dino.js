function Dino() {
  this.api_word = "";
  this.guessed = "";
  this.dinoResult = [];
}

Dino.prototype.createArray = function() {
  this.dinoResult = new Array(this.api_word.length).fill('-');
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Dino.prototype.checker = function(){
  var wordArray = this.api_word.toLowerCase().split('');
  var letter = this.guessed.toLowerCase();
  var dinoResult = this.dinoResult;

  if(dinoResult.indexOf(letter) === -1){
    while(wordArray.indexOf(letter) !== -1){
      var current_index = wordArray.indexOf(letter);
      wordArray[current_index] = "0";
      dinoResult[current_index] = letter;
    }
  }

  this.dinoResult = dinoResult;
  return dinoResult;
};

exports.dinoModule = Dino;
