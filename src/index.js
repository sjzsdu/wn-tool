/**
 * 从对象数组中，查找第一个符合某个键值对的对象及数组下表
 * @param {*} arr 
 * @param {*} key 
 * @param {*} value 
 */
export function getObjectFromArray(arr, key, value) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i][key] === value) {
      return [i, arr[i]]
    }
  }
  return [false, null]
}

/**
 * 从对象数组中，将某个对象的某个键拼接成字符串返回
 * @param {*} arr 
 * @param {*} key 
 */
export function getSplitStringFromArray(arr, key, spliter = ',') {
  const len = arr.length
  const strarr = []
  for (let i = 0; i < len; i++) {
    strarr.push(arr[i][key])
  }
  return strarr.join(spliter)
}