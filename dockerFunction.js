
var arr1 = [1,4,6,7]
var arr2 = [2,3,5,]

function sortArray (array,array2){
var newArray = array.concat(array2)
var sort = newArray.sort()
console.log(sort)

}

sortArray(arr1,arr2)
