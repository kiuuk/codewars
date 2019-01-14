function getMiddle(s) {
  let wordsArr = s.split("");
  let wordIndex = Math.floor(wordsArr.length / 2);
  if (wordsArr.length === 1) {
    return wordsArr[0];
  } else if (wordsArr.length % 2 !== 0) {
    return wordsArr[wordIndex];
  } else {
    return wordsArr[wordIndex - 1] + wordsArr[wordIndex];
  }
}

// return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
