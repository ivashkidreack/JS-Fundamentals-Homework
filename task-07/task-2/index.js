// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
const button = document.querySelector(".btn");
const text = document.querySelector("p");

function changeCSS() {
    text.style.color = "orange";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Comic Sans MS";
};

button.addEventListener("click", changeCSS);