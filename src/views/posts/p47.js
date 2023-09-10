const startTime = '2023-04-18 00:00:00'
const endTime = '2023-05-18 00:00:00'

new Date(startTime) // Tue Apr 18 2023 00:00:00 GMT+0800 (中国标准时间)
new Date(startTime) // Invalid Date
;('2023/04/18 00:00:00')

// 判定是否在展示时间内
const compare = (startTime, endTime) => {
  if (startTime && endTime) {
    const start = new Date(startTime.replace(/-/g, '/')).getTime()
    const end = new Date(endTime.replace(/-/g, '/')).getTime()
    const now = new Date().getTime()
    return now >= start && now <= end
  }
  return false
}
compare(startTime, endTime)
