// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміру за довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
function sumSliceArray(arr, first, second) {
    if (typeof arr[first] !== "number" || typeof arr[second] !== "number") {
        throw new Error("It's not possible to perform an addition operation");
    }
    return arr[first] + arr[second];
}

console.log(sumSliceArray ([1, 2, 3, 5], 1, 2));
// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.
function checkAge () {
    const status = ['admin', 'moderator', 'user'];
    const userName = prompt('Please, enter your name:');
    const userAge = prompt('Please, enter your age:');
    const userStatus = prompt('Please, enter your status:');

    try {
        if (!userAge || !userName || !userStatus) {
            throw new Error("The field is empty! Please enter your age")
        };
        if (!userStatus.includes(status)) {
            throw new  EvalError("Your status is undefined")
        };
        if (typeof userAge !== "number" || userAge < 18 || userAge > 70){
            throw new RangeError("Your age is incorrect.")
        }
    } catch(e) {
        return alert(`${e.name}: ${e.message}`)
    }
    alert("This is the link.")
}

// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea (width, height) {
    try {
        if (typeof width !== "number" || typeof height !== "number") {
            throw new TypeError ("The input parameters aren't valid!")
        };
    } catch(e) {
        console.log(`${e.name}: ${e.message}`);
        return
    }
    return width * height;
}


// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName (month) {
    monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    try {
        if (typeof month !== "number") {
            throw new MonthException("This is not month number!")
        }
        if ( month > 12 || month < 1) {
            throw new MonthException("Incorrect month number!")
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
        return
    }
    return monthName[month - 1]; 
}

console.log(showMonthName(5));
console.log(showMonthName('dsrfgh'));
console.log(showMonthName(33));
// 5. 
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser (id) {
    if (id < 0) {
        throw new Error ("ID is invalid")
    }
    return {id}
}

function showUsers (ids) {
    return ids.map((elem) => {
        try {
            return showUser(elem)
        } catch (e){
            console.log(e.name, ": ", e.message, ": ", elem);
        }
    }).filter((elem) => {
        return elem;
    });
}

console.log(showUsers (showUsers([7, -12, 44, 22])));