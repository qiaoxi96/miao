var a = function (...array) {
  let result = [];
  let max = 0
  for (let index in array) {
    if (array[index].length > max)
      max = array[index].length
  }
  for (let i = 0; i < max; i++) {
    let arr = []
    for (let j = 0; j < array.length; j++) {
      arr.push(array[j][i])
    }
    result.push(arr)
  }
  return result
}
var array = [[0, 12], [2, 2], [2, 5]]
console.log(a([0, 12], [2, 10, 2], [2, 5]))
