// factorial of a number
function factorial(num) {
    if(num === 0 || num === 1) return 1
    return num * factorial(num - 1)
};

console.log(factorial(5))


// Fibonacci
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
};

console.log(fibonacci(10));


// string reverse
function reverseString(str) {
    if(str === '') return ''
    return reverseString(str.substr(1)) + str[0];
};

console.log(reverseString('JAVASCRIPT'))


// sum of array
function sumArray(arr) {
    if(arr.length === 0) return 0
    return arr[0] + sumArray(arr.splice(1));
};

console.log(sumArray([1, 2, 3, 4, 5]));


// paliandrome
function isPaliandrome(str) {
    if(str.length <= 1) return true
    if(str[0] !== str[str.length -1]) return false
    return isPaliandrome(str.slice(1, -1))
}

console.log(isPaliandrome('malayalam'))


// reverse array
function reverseArray(arr){
    if (arr.length <= 1) return arr;
    return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)))
};

console.log(reverseArray([1, 2, 3, 4, 5]))


// remove duplicates from string
function removeDuplicates(str, i = 0, res = '') {
    if (i >= str.length) return res
    if (!res.includes(str[i])) {
        res += str[i]
    }
    i++
    return removeDuplicates(str, i, res)
}

let str = 'aabccddcgfcrrtdvv'
console.log(removeDuplicates(str));


// Remove duplicate from array
// function removedup(arr, i = 0, res = []){
//     if(i >= arr.length) return res
//     if(!res.includes(arr[i])){
//         res.push(arr[i])
//     }
//     i++
//     return removedup(arr, i, res)
// }

// let arr = [1, 4, 4, 1, 4, 2, 3, 2, 7, 9, 0];
// console.log(removedup(arr))


// multiplication
function traverse(num,count=1){
    if(count==11){
        return 
    }
    console.log(num*count)
    count++
    traverse(num,count)
}
let a=5;
traverse(a)


// count of zero
function counter(arr, count = 0, i = 0) {
    if(i >= arr.length) return count
    if(arr[i] === 0){
        count++
    }
    i++
    return counter(arr, count, i)
}

let arr = [1, 3, 0, 4, 0, 4, 0, 0, 3, 0, 1, 0]
console.log(counter(arr));


// Digit sum using recursion
let num = 1234857;

function digitSum(num) {
    if (num === 0) return 0;
    return (num  % 10) + digitSum(Math.floor(num / 10))
};

console.log(digitSum(num));


// Remove 'l' using recursion
// function remove(str, i = 0){
//     if(i >= str.length) return str.join('')
//     if(str[i] === 'l'){
//         str.splice(i, 1)
//         i--
//     }
//     return remove(str, i + 1)
// }

// let s = 'malayalam'
// let str = s.split('')
// console.log(remove(str))