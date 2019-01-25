function isIsogram(str) {
  let obj = {};
  for (let letter of str.toLowerCase()) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  for (let w of Object.values(obj)) {
    if (w >= 2) return false;
  }
  return true;
}
