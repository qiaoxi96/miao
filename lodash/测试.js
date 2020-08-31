let func = function (array) {
  if (Array.isArray(array) && array.length != 0) {
    return Math.min.apply(null, array)
  } else {
    return undefined
  }
}
console.log(func([10, 2, 1, 0, -100]))

