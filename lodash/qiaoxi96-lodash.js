//lodash函数实现

var qiaoxi96 = {
  chunk: function (array, size) {
    var arry2 = []
    for (var i = 0; i < array.length; i += size) {
      arry2.push(array.slice(i, i + size))
    }
    return arry2
  },
  compack: function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        arr.push(array[i])
      }
    }
  },


  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (val != val) {
      return true
    } else {
      return false
    }
  },

}


