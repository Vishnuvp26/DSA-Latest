function mergeSort(arr){
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

function merge(left,right){
    let sort = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sort.push(left.shift());
        } else {
            sort.push(right.shift())
        }
    }
    return [...sort, ...left, ...right];
};

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));

//================STRING SORT================//

// function mergeSort(arr) {
//     if (arr.length < 2) return arr

//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)
    
//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//     let sorted = []
//     let leftArr = [...left]
//     let rightArr = [...right]
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] < rightArr[0]) {
//             sorted.push(leftArr.shift())
//         } else {
//             sorted.push(rightArr.shift())
//         }
//     }
//     return sorted.concat(leftArr, rightArr).join('')
// }

// let arr = 'javascript'
// console.log(mergeSort(arr));