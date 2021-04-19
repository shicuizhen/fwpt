// 手机号验证
export function isvalidPhone (str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
//  ^为xx开头 $为xx结尾  \d是数字0-9
}
export function isvalidEmail (str) {
  // const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  // const reg = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
  const reg = /^[\w.-]+@([0-9a-zA-Z\w-]+\.)+[0-9a-zA-Z]{2,8}$/
  return reg.test(str)
}
