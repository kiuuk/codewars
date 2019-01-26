function sevenAte9(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "7" && arr[i + 1] == "9" && arr[i + 2] == "7") {
      arr.splice(i + 1, 1);
    }
  }
  return arr.join("");
}
