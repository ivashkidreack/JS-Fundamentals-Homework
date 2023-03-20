//перше завдання
function compact (arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }return result
}
const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2); 

//друге завдання
function createArray (start, end) {
    const arr = [];
    for (let i = start; i !== end + 1; i += 1) {
        arr.push(i);
    }return arr
}
let newArr = createArray(2, 9);
console.log(newArr);

//третє завдання
function printNumbers (a, b) {
    const arr = [];
    for (let i = a; i <= b; i += 1) {
        for (let j = 0; j < i - a + 1; j += 1) {
            arr.push(i);
        }
    } return arr;
}
let numbers = printNumbers (2, 6);
console.log(numbers);

//четверте завдання
function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i += 1) {
      arr[i] = Math.floor(Math.random() * 500) + 1;
    } return arr;
  }
console.log(randArray(5));

//п'яте завдання
function funcName (arr) {
    let typeArr = [[], []]
    for (let i in arr) {
        (typeof arr[i]) === "number" ? typeArr[0].push(arr[i]) : 
        (typeof arr[i]) === "string" ? typeArr[1].push(arr[i]) : 
        Array.isArray(arr[i]) === true ?
        (() => {
            for (let j = 0; j < arr[i].length; j += 1) {
                (typeof arr[i][j]) === "number" ? typeArr[0].push(arr[i][j]) : typeArr[1].push(arr[i][j]);
            }
        })() : null;
    } return typeArr;
}
let  arr3 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = funcName(arr3);
console.log(arrNew)

//шосте завдання
function calc (a, b, op) {
    return op === 1 ? a - b :
    op === 2 ? a * b :
    op === 3 ? a / b : a + b
}

//сьоме завдання
function findUnique (arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr.includes(arr[i], i + 1) === true) {
            return false;
        }
    } return true;
}
console.log(findUnique([1, 2, 3, 5, 3,]));
console.log(findUnique([1, 2, 3, 5, 11])); 