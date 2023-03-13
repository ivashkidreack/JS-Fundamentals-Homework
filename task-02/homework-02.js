//перше завдання
function comparable (a, b, c) {
    return a < b && b < c 
}

//друге завдання
let x = 1;
let y = 2;

let res1 = "" + x + y;

console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);

console.log(res2);
console.log(typeof res2);

let res3 = x < y;

console.log(res3);
console.log(typeof res3);

let res4 = parseFloat("example" + x - y);

console.log(res4);
console.log(typeof res4);


//третє завдання
let isAdult = confirm('Are you 18 years old?');
let answer = isAdult === true ? "Ви досягли повнолітнього віку" : "Ви ще надто молоді";
console.log(answer);

//чертверте завдання
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let frequency = {};
let maxFrequency = 0;
let data = 0;

for (let num of arr) {
  frequency[num] = (frequency[num] || 0) + 1;
  if (frequency[num] > maxFrequency) {
    maxFrequency = frequency[num];
    data = num;
  }
}
let newArray = arr.filter(num => num !== data);
console.log(newArray)


//п'яте завдання
let a = prompt("Введіть першу сторону тиркутника у сантиметрах:");
let b = prompt("Введіть другу сторону тиркутника у сантиметрах:");
let c = prompt("Введіть третю сторону тиркутника у сантиметрах:");

if (a + b <= c || c + b <= a || a + c <= b) {
    console.log("Сторони трикутника введені не правильно.");
} else {
    let p = (a + b + c)/2;
    let s = (Math.sqrt(p*(p - a) * (p - b) * (p - c))).toFixed(3);
    let answer = a ** 2 + b ** 2 === c ** 2 || c ** 2 + b ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2 ? "Трикутник прямокутний" : "Трикутник не прямокутний"
    console.log(`Площа трикутника = ${s}`);
    console.log(answer);
}

//шосте завдання
const now = new Date();

const hours = now.getHours();
let greeting = hours <= 5 || hours >= 23 ? "Доброї ночi" : hours > 5 && hours < 11 ? "Доброго ранку" : hours >= 11 && hours < 17 ? "Доброго дня" : "Доброго вечора";

console.log(greeting)
