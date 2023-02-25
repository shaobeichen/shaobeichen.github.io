export default function (value) {
  if (!value) return '0'
  const valueStr = String(value)
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return '￥' + valueStr.replace(reg, '$&,')
}
