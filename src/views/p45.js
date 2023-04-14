const obj = {
  a: 1,
  b: '2',
  c: { a: { b: 1 } },
  d: [1, 2],
  e: function () {}, // 无字段
  h: undefined, //
  f: /z/g, // {}
  g: Date(), // "Fri Apr 14 2023 08:46:15 GMT+0800 (中国标准时间)"
}
function deepClone(value) {
  const result = JSON.parse(JSON.stringify(value))
  return result
}
deepClone(obj)
