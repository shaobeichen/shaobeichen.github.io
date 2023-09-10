// // 更改前
// const obj = {
//   send(val) {
//     console.log(val + '1')
//   },
// }
// const objB = {
//   send(val) {
//     console.log(val + '1')
//   },
// }
// // 页面调用
// obj.send('已发送')
// objB.send('已发送')

// 更改后
const arr = [
  {
    send(val) {
      console.log(val + '1')
    },
  },
  {
    send(val) {
      console.log(val + '2')
    },
  },
]

const obj = new Proxy(arr, {
  get: function (target, key) {
    return function () {
      target.forEach(item => {
        item[key](...arguments)
      })
    }
  },
})
// 页面调用
obj.send('已发送')
