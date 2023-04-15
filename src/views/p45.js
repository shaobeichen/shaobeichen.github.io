// 浅拷贝
const a = { b: 1 }
const c = a
c.b = 2
console.log(a) // { b: 2 }

const d = JSON.parse(JSON.stringify(a))
d.b = 3
console.log(a) // { b: 1 }
console.log(d) // { b: 3 }

// 深拷贝
const obj = {
  a: 1,
  b: '2',
  c: { a: { b: 1 } },
  d: [1, 2],
  e: function () {}, // 无字段
  f: /z/g, // {}
  g: new Date(), // "Fri Apr 15 2023 08:46:15 GMT+0800 (中国标准时间)"
}

// 简易版
function deepClone(obj) {
  if (obj === null) return obj
  if (typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  let cloneObj = {}
  for (let key of Object.keys(obj)) {
    cloneObj[key] = deepClone(obj[key])
  }
  return cloneObj
}

deepClone(obj)
