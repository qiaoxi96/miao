//lodash函数实现

var qiaoxi96 = {

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
  chunk: function (arry, size = 1) {
    var arry2 = []
    for (var i = 0; i < arry.length; i += size) {
      arry2.push(array.slice(i, i + size))
    }
    return arry2
  },
  compack: function (arry) {
    var arr = []
    for (var i = 0; i < arry.length; i++) {
      if (arry[i]) {
        arry2.push(arry[i])
      }
    }
  },



}


