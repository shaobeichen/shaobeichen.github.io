/**
 * 延迟函数
 * @param {number} delay 延迟时间
 */
function sleep(delay) {
  return new Promise(resolve => setTimeout(() => resolve(), delay))
}
