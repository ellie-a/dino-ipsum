function Dino() {
  this.api_word = "";
  this.guessed = "";
  this.dinoResult = [];
}

Dino.prototype.result = function() {
  this.dinoResult = new Array(this.api_word.length);
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Dino.prototype.checker = function(){
  var wordArray = this.api_word.toLowerCase().split('');
  var letter = this.guessed.toLowerCase();
  var dinoResult = this.dinoResult;
  console.log(letter);

  if(dinoResult.indexOf(letter) === -1){
    while(wordArray.indexOf(letter) !== -1){
      var current_index = wordArray.indexOf(letter);
      wordArray.splice(current_index, 1);
      dinoResult.insert(current_index, letter);
    }
  }

  console.log(this.dinoResult);
  this.dinoResult = dinoResult;
  return dinoResult;
};

exports.dinoModule = Dino;
