// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу (використовуючи аргумент delay) і завершується повідомленням message.
function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
};

getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
});

// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.


function calcArrProduct(arr) {
  return new Promise(function(resolve, reject) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        reject("Error! Incorrect array!");
        return;
      }
      product *= arr[i];
    }
    resolve(product);
  });
};

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

// Створіть наступний асинхронний ланцюжок promise:

new Promise(function (resolve, reject) {
  let number = prompt("Enter a number:");

  if (isNaN(number)) {
    reject("Invalid input!");
  } else {
    resolve(Number(number)); 
  }
}).catch(function (error) {
  return new Promise(function (resolve, reject) {
    let number;
    do {
      number = prompt("Enter a number:");
    } while (isNaN(number)); 
    resolve(Number(number));
  });
}).then(function (result) {
  console.log(result);
});

// Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд). Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, який резолвиться поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.


function showNumbers() {
  const interval = Math.floor(Math.random() * 3000);
  let i = 0;
  
  const printNumber = () => {
    console.log(i);
    i++;
    
    if (i <= 9) {
      setTimeout(printNumber, Math.floor(Math.random() * 3000));
    }
  }
  
  setTimeout(printNumber, interval);
};

async function main() {
  await showNumbers();
}

main();