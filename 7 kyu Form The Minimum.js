function minValue(values) {
  let result = [];
  let sorted = values.sort();
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== values[i + 1]) {
      result.push(values[i]);
    }
  }
  return parseInt(result.join(""));
}
