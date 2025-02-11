function binarySearch (arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10));


//--------------------Recursion--------------------//
function binarySearch(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
    if (leftIndex > rightIndex) return -1
    
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) return middleIndex
    if (target < arr[middleIndex]) {
        return binarySearch(arr, target, leftIndex, middleIndex - 1)
    } else {
        return binarySearch(arr, target, middleIndex + 1, rightIndex)
    }
}

let arr = [-5, 2, 4, 6, 10]
let target = 6
console.log(binarySearch(arr, target));