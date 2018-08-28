window.algorithm.quickSort = function (arr = []) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  console.log(pivot)
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

window.algorithm.bubbleSort = function (arr = []) {
  let temp
  for (let i = arr.length - 1; 0 < i; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

window.algorithm.selectSort = function (arr = []) {
  let temp
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    let minValue = arr[minIndex]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minIndex = j
        minValue = arr[minIndex]
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}