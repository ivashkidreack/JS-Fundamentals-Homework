//друге завдання
console.log('Ivanova')

//третє завдання
let firstNum = 5;
let secondNum = 7;

console.log(firstNum, secondNum);

firstNum = secondNum;

console.log(firstNum, secondNum);

//четверте завдання
const Object = {
    color: "blue",
    checks: 55,
    moved: true,
    variables: undefined,
    copies: null,
}

//п'яте завдання
let isAdult = confirm('Are you 18 years old?');
console.log(isAdult);

//шосте завдання
const myName = "Anastasiia";
const mySurname = "Ivanova";
const myTeam = "Best team"
const myBirthYear = 2001;
const myStatus = true;
const myChildren = null;
const myJob = undefined;

console.log(myBirthYear, myStatus, myName, mySurname, myTeam, myChildren, myJob);

//сьоме завдання
const email = prompt('What is your email?', 'example@com');
const login = prompt('What is your login?', 'Please, write here');
const password = prompt('What is your password?', "We don't tell anyone");

console.log('Dear ', login, ', your email is ', email, ' and passwort is', password, '.');

//восьме завдання
const secondInHour = 60*60;
console.log(secondInHour, " - стільки секунд в хвилині");

const secondInDay = 24*secondInHour;
console.log(secondInDay, " - стільки секунд у добі");

const secondInMonth = 30*secondInDay;
console.log(secondInMonth, " - стільки секунд у місяці");
