// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const inputForm = document.querySelectorAll(".arr");
const button = document.querySelector(".btn");
const outBlock = document.querySelector(".out");
let dataArray = [];

button.addEventListener("click", function(e){
    let dataObj = {};
    inputForm.forEach(function(field) {
        const fieldName = field.getAttribute("data-form");
        const fieldValue = field.value;
        dataObj[fieldName] = fieldValue;
    });
    dataArray.push(dataObj);
    outBlock.innerHTML = JSON.stringify(dataArray);
    document.querySelector('form').reset(); 
});