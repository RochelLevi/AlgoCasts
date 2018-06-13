// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//well I'm not positive this is actually bubblesort, but I kinda think it is maybe
//just less efficient bec I keep going until the end

function bubbleSort(arr) {
  let swapped = "start"
  while (swapped){
    swapped = false
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++){
    let minIndex = i
    let minVal = arr[i]
    for (let j = i + 1; j < arr.length; j++){
      if(arr[j] < minVal){
        minIndex = j
        minVal = arr[j]
      }
    }
    if (minIndex !== i){
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {
  let merged = []

  while(left.length && right.length){
    left[0] < right[0] ? merged.push(left.shift()) : merged.push(right.shift())
  }
  console.log(merged)
  left.length ? left.forEach(el => merged.push(el)) : right.forEach(el => merged.push(el))

  return merged
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
