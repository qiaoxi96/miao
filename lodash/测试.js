var func = function (props = [], values = []) {
  let result = {}
  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values[i]
  }
  return result;
}

console.log(func(['c', 'b'], [2, 1, 3]))

