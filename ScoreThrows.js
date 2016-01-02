module.exports = ScoreThrows;

var dartThrows = [1, 2, 3, 4];

function ScoreThrows (numArr) {
  var totalScore = 0;
  var bonusArr = [];

  if (numArr === []) {
    return totalScore;
  }

  for (var i = 0; i < numArr.length; i++) {
    var currentThrow = numArr[i];

    if (currentThrow < 5) {
      bonusArr.push(currentThrow);
      totalScore += 10;
    }

    if (currentThrow >= 5 && currentThrow <= 10) {
      totalScore += 5;
    }

    if (currentThrow > 10) {
      totalScore += 0;
    }
  }

  if (bonusArr.length !== 0 && bonusArr.length === numArr.length) {
    totalScore += 100;
  }

  return totalScore;
}

console.log(ScoreThrows(dartThrows));