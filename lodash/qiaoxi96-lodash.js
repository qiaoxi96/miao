//lodash函数实现

var qiaoxi96 = {
  //以size拆分数组块，并返回这些数组块组成的数组
  chunk: function (array, size) {
    var arry2 = []
    for (var i = 0; i < array.length; i += size) {
      arry2.push(array.slice(i, i + size))
    }
    return arry2
  },
  //返回原数组的所有非假数组
  compact: function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        arr.push(array[i])
      }
    }
    return arr
  },
  //创建一个新数组，将array与任何数组 或 值连接在一起
  concat: function (array, ...values) {
    let arr = [];
    for (let i in array) {
      arr.push(array[i]);
    }
    for (let j in values) {
      if (Array.isArray(values[j])) {
        for (let a in values[j]) {
          arr.push(values[j][a])
        }
      } else {
        arr.push(values[j])
      }
    }
    return arr
  },
  //返回原数组中不在新数组出现的元素集合
  difference: function (array, ...args) {
    let arr = [].concat.apply([], args)
    /*
      apply([], args) 可从第二组数组开始将其中参数直接传送
      concat()方法将其拼接成一个数组
    */
    return array.filter((item, index) => {
      return !arr.includes(item)
    })
    //对array数组进行filter()方法，由于filter通过测试保留，false不保留，筛选出不在arr数组中出现的元素集
  },
  //从数组中去除n个元素返回的数组
  drop: function (array, n = 1) {
    for (var i = 0; i < n; i++) {
      array.shift()
    }
    return array
  },

  /*  将原数组中某段函数替换为value
  array (Array): 要填充改变的数组。
  value (*): 填充给 array 的值。
  [start=0] (number): 开始位置（默认0）。
  [end=array.length] (number):结束位置（默认array.length）
  */
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  //获取数组中的第一个元素
  head: function (array) {
    return array[0]
  },
  //减少一级array嵌套结构
  flatten: function (array) {
    let arr = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          arr.push(array[i][j])
        }
      } else {
        arr.push(array[i])
      }
    }
    return arr
  },
  /*从fromIndex开始从array中查询value，并返回其索引位置
    array (Array): 需要查找的数组。
    value (*): 需要查找的值。
    [fromIndex=0] (number): 开始查询的位置。
  */
  indexOf: function (array, value, fromIndex = 0) {
    let count = 0
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      } else {
        count++
      }
    }
    if (count === array.length) {
      return -1
    }
  },
  //获取数组最后一个元素之外的所有元素
  initial: function (array) {
    return array.slice(0, array.length - 1)
  },
  //创建唯一值的数组，这个数组包含所有给定数组都包含的元素
  intersection: function (...arrays) {
    let result = [];
    for (let i in arrays[0]) {
      result.push(arrays[0][i])
    }
    for (let j = 1; j < arrays.length; j++) {
      for (let a in result) {
        if (arrays[j].indexOf(result[a]) == -1) {
          result.splice(a, 1)
        }
      }
    }
    return result
  },
  //将数组转换为由separator相连的字符串
  join: function (array, separator) {
    return array.reduce((cur, item, index) => {
      if (index === array.length - 1) {
        cur = cur + item
      } else {
        cur = cur + item + separator
      }
      return cur
    }, '')
    // var arr
    // for (var i = 0; i < array.length; i++) {
    //   arr += array[i]
    // }

    //return (array.join(separator))
  },

  //获取数组中最后一个元素
  last: function (array) {
    return array[array.length - 1]
  },
  //从右到左遍历array，找出value
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    if (!value) {
      return array.length
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },
  //获取array的第n个元素，若n为负数， 返回从右到左的第n个元素
  nth: function (array, n = 0) {
    if (!n)
      return array[0]
    if (n >= 0) {
      return array[n]
    } else {
      return array[(array.length + n)]
    }
  },
  //输出数组中移除所有value后的数组
  pull: function (array, ...value) {
    var arr = value.concat()
    for (var j in arr) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == arr[j]) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },
  //移除array数组中与val数组相等的值
  pullAll: function (array, val) {
    for (var j in val) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == val[j]) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },
  //返回移除index元素组成的新数组
  pullAt: function (array, ...index) {
    index = index.sort((a, b) => a - b)
    return index.reduce((cur, item) => {
      cur.unshift(array.splice(item, 1))
      return cur
    }, [])
  },
  //翻转array数组
  reverse: function (array) {
    let left = 0
    let right = array.length - 1
    while (left < right) {
      // var item = array[left]
      // array[left] = array[right]
      // array[right] = item
      // left++
      // right--
      [array[left++], array[right--]] = [array[right--], array[left++]];
    }
    return array
  },
  //array (Array): 要裁剪数组。
  //[start = 0](number): 索引下标，开始位置。
  //[end = array.length](number): 结束位置。
  slice: function (array, start = 0, end = array.length) {
    let arr = []
    for (let i = start; i < end; i++) {
      arr.push(array[i])
    }
    return arr
  },
  //使用二进制的方式检索来决定value值应该插入到数组中尽可能小的索引位置以保证array的排序
  sortedIndex: function (array, value) {
    if (!value) {
      return array.length
    }
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] < value) {
        return ++i
      }
    }
  },
  //在排序的array数组中找到value，并返回索引值，否则返回-1
  sortedIndexOf: function (array, value) {
    let left = 0;
    let right = array.length - 1;
    while (right - left > 0) {
      if (array[left] > array[right]) {
        return -1;
      }
      let mid = Math.floor((left + right) / 2)
      if (array[mid] >= value) {
        right = mid
      } else {
        left = mid + 1
      }
      if (array[left] === value) {
        return left
      }
    }
    return -1
  },
  //获得array除第一个元素以外的全部元素
  tail: function (array) {
    return array.slice(1)
  },
  //从array起始元素开始提取n个元素
  take: function (array, n = 1) {
    return array.slice(0, n);
  },
  //从右开始提取array的n个元素
  takeRight: function (array, n = 1) {
    // return array.slice(array.length - n, n + 1)
    if (n == 0) {
      return []
    }
    return array.slice(-n);
  },
  //返回所有数组中的元素，按数组顺序排序且唯一的元素并集
  union: function (...array) {
    let arr = [].concat.apply([], array)
    let s = new Set(arr); //...new Set()去重
    return [...s];
  },
  //返回去重后的数组
  uniq: function (array) {
    return array.filter((item, index) => {
      return array.indexOf(item) === index//indexOf返回找到的第一个的下标，与传入item的下标index比较，返回相等的值
    })
    //return [...new Set(array)]
  },
  //类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构
  unzip: function (array) {
    let result = []
    let max = 0;
    for (let index in array) {
      if (array[index].length > max)
        max = array[index].length
    }
    for (let i = 0; i < max; i++) {
      let arr = [];
      for (let j = 0; j < array.length; j++) {
        arr.push(array[j][i])
      }
      result.push(arr)
    }
    return result
  },
  //返回一个去除values值的新数组
  without: function (array, ...values) {
    return array.filter((item) => {
      return !values.includes(item)//返回不在values中存在的值
      /*
      return values.indexOf(item) === -1//用indexOf方法判断数组中是否含有item，没有返回-1
      */
    })
  },
  //返回一个给定数组唯一值的数组
  xor: function (...arrays) {
    let result = [];
    for (let i in arrays[0]) {
      result.push(arrays[0][i])
    }
    debugger;
    for (let j = 1; j < arrays.length; j++) {
      for (let a = 0; a < arrays[j].length; a++) {
        if (result.indexOf(arrays[j][a]) === -1) {
          result.push(arrays[j][a])
        } else {
          let num = result.indexOf(arrays[j][a])
          result.splice(num, 1)
        }
      }
    }
    return result;
  },
  //创建一个数组，将所有传入的数组的第一项作为第一个元素，所有第二项作为第二个元素。。。
  zip: function (...array) {
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
  },
  //接受2个数组，第一个数组中的值作为属性标识符（属性名，第二个数组中的值作为相应的属性值
  zipObject: function (props = [], values = []) {
    let result = {}
    for (let i = 0; i < props.length; i++) {
      result[props[i]] = values[i]
    }
    return result;
  },
  //检查 value(值) 是否在 collection(集合) 中
  // collection(Array|Object|string): 要检索的集合。
  // value(*): 要检索的值。
  // [fromIndex = 0](number): 要检索的 索引位置。
  includes: function (col, val, fromIndex = 0) {
    if (Array.isArray(col)) {
      if (fromIndex >= 0) {
        for (let i = fromIndex; i < col.length; i++) {
          if (col[i] === val)
            return true;
        }
      } else {
        for (let i = fromIndex; i < col.length; i++) {
          if (col[i] === val)
            return true;
        }
      }

      if (i === col.length)
        return false;
    } else if (typeof col === Object) {

    }
  },
  //返回collection的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数
  size: function (collection) {
    if (collection instanceof Array || collection instanceof String) {
      return collection.length;
    } else
      return Object.keys(collection).length //Object.keys(obj) 返回obj的可枚举属性
    //Object.getOwnPropertyNames(obj) 返回所有属性（包括不可枚举）
  },
  //根据 precision向下舍入number。（注：precision可以理解为保留几位小数。）
  //number: 要向下舍入的值。
  //precision: 向下舍入的精度。
  floor: function (number, precision) {
    if (!precision || precision === 0) {
      return Math.floor(number)
    } else {
      let num = Math.pow(10, precision);
      return (Math.floor(number * num) / num);
    }
  },
  //计算array的最大值，若为空或假返回undefined
  max: function (array) {
    if (Array.isArray(array) && array.length != 0) {
      return array.reduce((prev, cur) => prev > cur ? prev : cur)
    } else {
      return undefined
    }
  },
  //计算array的最小值，若为空或假返回undefined
  min: function (array) {
    if (Array.isArray(array) && array.length != 0) {
      return array.reduce((prev, cur) => prev < cur ? prev : cur)
    } else {
      return undefined
    }
  },
  //计算array 的平均值
  mean: function (array) {
    if (Array.isArray(array) && array.length != 0) {
      return (array.reduce((prev, cur) => prev += cur)) / array.length
    } else {
      return NaN
    }
  },
  //两个数相乘
  multiply: function (augend, addend) {
    if (!augend && augend !== false) {
      return 1
    }
    if (!addend) {
      return augend
    } else {
      return augend * addend
    }
  },
  //根据 precision（精度） 四舍五入 number
  round: function (number, precision) {
    if (!precision || precision === 0) {
      return Math.round(number)
    } else {
      let num = Math.pow(10, precision);
      return (Math.round(number * num) / num);
    }
  },
  //两数相减
  subtract: function (minuend, subtrahend) {
    if (!subtrahend && minuend !== false) {
      return 0
    }
    if (!subtrahend) {
      return minuend
    } else {
      return minuend - subtrahend
    }
  },
  //计算 array 中值的总和
  sum: function (array) {
    return array.reduce((prev, cur) => prev += cur)
  },














  after: function (n, func) {
    var i = 0
    return function (...args) {

    }
  },
  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },



  before: function before(n, func) {
    var i = 0
    var result
    return function (...args) {
      if (i < n) {
        i++
        result = func(...args)
      } else {
        return result
      }
    }
  },




  //判断一个数值是否为Null
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  //判断一个数值是否为NaN
  isNaN: function (val) {
    if (val != val) {
      return true
    } else {
      return false
    }
  },


}


