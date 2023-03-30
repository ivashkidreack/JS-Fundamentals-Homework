// 1. Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
    constructor (x, y, r) {
        this.centerX = x;
        this.centerY = y;
        this. radius = r;
    }
    getLength () {
        return 2 * Math.PI * this.radius;
    }
    static getLengthByR (radius) {
        return 2 * Math.PI * radius;
    }
    createNewCircle () {
        return new Circle (this.centerX, this.centerY, this.radius);
    }
    static getLengthMeth (x, y, r) {
        return {centerX : x, centerY : y, radius : r};
    }
    isPointInside(x, y) {
        return Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2) <= this.radius;
      }
    
      toString() {
        return `Circle(${this.centerX}, ${this.centerY}, ${this.radius})`;
      }
}

const circle =  new Circle(0, 0, 5);
console.log(circle.isPointInside(2, 2));
console.log(circle.toString());


// 2. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.

function propsCount (currentObject) {
    return Object.keys(currentObject).length;
}

// 3. 
// -  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
class Person {
    constructor (name, surname) {
        this.name = name,
        this.surname = surname
    }
    showFullName () {
        console.log(`Name: ${this.name}, Surname: ${this.surname}`)
    }
}

// - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
// - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.  

class Student extends Person {
    constructor(name, surname, year,) {
    super(name, surname);
    this.year = year;
    }
    showFullName (midleName) {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Midle name: ${midleName}`)
    }
    showCourse () {
        let now = new Date;
        return now.getFullYear() - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES (part2)
// 4. 
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
class Marker {
    constructor (color, inkLevel) {
        this.color = color,
        this.inkLevel = inkLevel
    }
    printText (text) {
        const inkPerSymbol = 0.5;
        let printedText = "";
        for(let i = 0; i < text.length; i += 1) {
            if (text[i] === " ") {
                printedText += " ";
            } else if (this.inkLevel >= inkPerSymbol) {
                printedText += text[i];
                this.inkLevel -= inkPerSymbol;
            } else {
                console.log("The marker is out of ink.");
                break
            }
          };
          console.log("%c" + printedText, `color: ${this.color}`);
    } 
}
class RefillableMarker extends Marker {
    constructor(color, inkLevel) {
      super(color, inkLevel);
      this.inkCapacity = 100;
    }
    refuelMarker (amount) {
        for (let i = 0; i < amount; i += 1) {
            if (this.inkLevel < this.inkCapacity) {
              this.inkLevel += 1;
            } else {
              console.log("Your marker is full.");
              break;
            }
        }
        console.log(`Refilled ${amount} ink. Current ink level: ${this.inkLevel}`);
    }
}
const marker = new RefillableMarker("red", 10);
marker.printText("Тут може бути ваш текст");
marker.printText("Коли ж закінчатся чорнила...");
marker.refuelMarker(50);
marker.refuelMarker(70);

// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//         4) Вивести значення зарплати з новим experience.
//         5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
//         6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

class Worker {
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName,
        this.dayRate = dayRate,
        this.workingDays = workingDays,
        this._experience = 1.2
    }
    showSalary () {
        console.log(`Salary ${this.fullName}: ${this.dayRate * this.workingDays}`);
    }
    showSalaryWithExperience() {
        console.log(`Salary ${this.fullName}: ${this.dayRate * this.workingDays * this._experience}`);
    }
    get experience() {
        return this._experience;
    }
    
    set experience(value) {
        this._experience = value;
    }
}
const JimJoes = new Worker ("Jim Joes", 5, 3);
console.log(JimJoes.showSalary());
console.log(JimJoes.showSalaryWithExperience());
JimJoes._experience = 1.5;
console.log(JimJoes._experience);
console.log(JimJoes.showSalaryWithExperience());

const JohnDoe = new Worker('John Doe', 5, 4);
const MarySmith = new Worker('Mary Smith', 5, 5);

const workers = [JimJoes, JohnDoe, MarySmith];
workers.sort((a, b) => {
  return a.dayRate * a.workingDays * a.experience - b.dayRate * b.workingDays * b.experience;
});

for (const worker of workers) {
  console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.experience}`);
}
// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584