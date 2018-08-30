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

window.algorithm.quickSort1 = function (array) {
  // 交换元素位置
  function swap(array, i, k) {
    var temp = array[i];
    array[i] = array[k];
    array[k] = temp;
  }
  // 数组分区，左小右大
  function partition(array, left, right) {
    var storeIndex = left;
    var pivot = array[right]; // 直接选最右边的元素为基准元素
    for (var i = left; i < right; i++) {
      if (array[i] < pivot) {
        swap(array, storeIndex, i);
        storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
      }
    }
    swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
    return storeIndex;
  }

  function sort(array, left, right) {
    if (left > right) {
      return;
    }
    var storeIndex = partition(array, left, right);
    sort(array, left, storeIndex - 1);
    sort(array, storeIndex + 1, right);
  }
  sort(array, 0, array.length - 1);
  return array;
}