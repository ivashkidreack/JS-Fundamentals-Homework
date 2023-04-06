// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
function upperCase(text) {
    return /^[A-Z]/.test(text) === true ? 
    "String's starts with uppercase character" :
    "String's not starts with uppercase character";
}
let test1 = upperCase('regexp');
console.log(test1);  
let test2 = upperCase('RegExp');
console.log(test2);  


// 8-2. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.

function checkEmail(email) {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
  }

let newCheck = checkEmail("Qmail2@gmail.com");
console.log(newCheck);

// 8-3. 
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.

const text = "Java Script";
const regexp = /(Java)\s+(Script)/;
const updatedText = text.replace(regexp, '$2, $1');
console.log(updatedText); 


// 8-4. 
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function validateCardNumber(cardNumber) {
    const regexp = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regexp.test(cardNumber);
}
console.log(validateCardNumber(2345-9876-9876-09876));

// 8-5. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

function detailCheckEmail(email) {
    const regexp = /^[a-zA-Z0-9]+([_\-.]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    return regexp.test(email) === true ? "Email is correct!" :
    "Email is not correct!"; 
}
console.log(detailCheckEmail('my_mail@gmail.com')); 


// 8-6. 
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).

function checkLogin(str) {
    const regexp = /^\w[\w\d]*(\.\d+)?[\w\d]*$/g;
    let numbers = str.match(/\d+(\.\d+)?/g);
    console.log(regexp.test(str));
    if (numbers) {
        numbers = numbers.map(num => num.replace(/[.]/g, '.'));
        console.log(numbers);
    }
    return;
};
  
checkLogin('ee1.1ret3');
// true 
// //1.1, 3

// checkLogin('ee1*1ret3');
// false 
// //1, 1, 3