
function myEach(collection, callback) {
  for (const number in collection) {
    callback(collection[number])
  }
  return collection
}

function myMap(collection, callback) {
  let modifiedArray = []

  for (const number in collection) {
    modifiedArray.push(callback(collection[number]))

  }
  return modifiedArray;
}

function myReduce(collection, callback, acc) {
  let arr = Object.values(collection)
  let copy = [...arr]
  acc = acc || copy.shift();
  for (const number in copy) {
    acc = callback(acc, copy[number], copy)
  }
  return acc
}

function myFind(collection, predicate) {
  for (const number in collection) {
    let element = collection[number];
    if (predicate(element)) {
      return element;
    }
  }
}

function myFilter(collection, predicate) {
  let arr = [];

  for (const number in collection) {
    let element = collection[number];
    if (predicate(element)) {
      arr.push(element);
    }
  }
  return arr
}

function mySize(collection) {
  return Object.keys(collection).length
}

function myFirst(array, n = 1) {
  let count = 1
  let arr = []
  for (const acc in array) {
    if (count <= n){
      arr.push(array[acc])
      count++
    }
  }
  return arr.length > 1 ? arr : arr[0]
}

function myLast(array, n = 1) {
  let start = array.length - n
  
  return n > 1 ? array.slice(start, array.length) : array[start]
}

function myKeys(object){
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)

}
