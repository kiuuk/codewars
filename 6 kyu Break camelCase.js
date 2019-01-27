function solution(string) {
  let result = string.replace(/[A-Z]/g, " $&");
  return result;
}
