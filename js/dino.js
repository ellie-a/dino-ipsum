function Dino() {
  this.api_word = "";
  this.guessed = "";
  this.dinoResult = [];
  this.guessCount= " ";
  this.wrongLetters = [];
  this.turnCounter = 0;
}

Dino.prototype.startGame = function() {
  this.dinoResult = new Array(this.api_word.length).fill('-');
  this.guessCount = Math.ceil(this.dinoResult.length/2);
};

Dino.prototype.checker = function(){
  var wordArray = this.api_word.toLowerCase().split('');
  var letter = this.guessed.toLowerCase();
  var guessCount = this.guessCount;
  var dinoResult = this.dinoResult;
  var wrongLetters = this.wrongLetters;
  var turnCounter = this.turnCounter;

    if(dinoResult.indexOf(letter) === -1){
      if(wordArray.indexOf(letter) === -1) {
        if(guessCount >= 1) {
          wrongLetters.push(letter);
          guessCount--;
          turnCounter++;
          alert('you have ' + guessCount + ' guesses left');
        } else {
          alert('you lost son');
        }
      }
      if (guessCount > 0) {
        while(wordArray.indexOf(letter) !== -1){
          var current_index = wordArray.indexOf(letter);
          wordArray[current_index] = "0";
          dinoResult[current_index] = letter;
        }
      }
    }
    this.turnCounter = turnCounter;
    this.wrongLetters = wrongLetters;
    this.guessCount = guessCount;
    this.dinoResult = dinoResult;
    return dinoResult;
  };

Dino.prototype.winner = function() {
  if(this.dinoResult.indexOf('-') === -1){
    alert('you won son');
    $('#ipsum').show();
  }
};

Dino.prototype.validator = function(guessed) {
  var guessCount = this.guessCount;
  var result = false;
  if (/^[a-zA-Z]+$/.test(guessed)) {
    this['guessed'] = guessed;
    result = true;
  } else {
    alert('Not a letter son!');
  }
  this['guessCount'] = guessCount;
  return result;
};





exports.dinoModule = Dino;
