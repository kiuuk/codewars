var gimme = function(inputArray) {
  let sorted = inputArray.map(n => n).sort((a, b) => a - b);
  return inputArray.indexOf(sorted[1]);
};
