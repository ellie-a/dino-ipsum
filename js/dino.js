function Dino() {
  this.api_word = "";
  this.guessed = "";
  this.dinoResult = [];
  this.guessCount;
}

Dino.prototype.startGame = function() {
  this.dinoResult = new Array(this.api_word.length).fill('-');
  this.guessCount = Math.ceil(this.dinoResult.length/2);
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Dino.prototype.checker = function(){
  var wordArray = this.api_word.toLowerCase().split('');
  var letter = this.guessed.toLowerCase();
  var guessCount = this.guessCount;
  var dinoResult = this.dinoResult;
  if(dinoResult.indexOf(letter) === -1){
    if(wordArray.indexOf(letter) === -1) {
      if(guessCount > 1) {
        guessCount--;
        alert('you have ' + guessCount + ' guesses left');
      } else {
        alert('you lost son');
      }
    }
    while(wordArray.indexOf(letter) !== -1){
      var current_index = wordArray.indexOf(letter);
      wordArray[current_index] = "0";
      dinoResult[current_index] = letter;
    }
  }
  this.guessCount = guessCount;
  this.dinoResult = dinoResult;
  return dinoResult;
};

Dino.prototype.winner = function() {
  if(this.dinoResult.indexOf('-') === -1){
    alert('you won son');
  }

};

exports.dinoModule = Dino;
