var isAnagram = function(test, original) {
  return cleanup(test) == cleanup(original) ? true : false;
  function cleanup(word) {
    return word
      .toLowerCase()
      .split("")
      .sort()
      .join();
  }
};
