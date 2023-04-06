const button1 = document.querySelector(".btn_1");
const button2 = document.querySelector(".btn_2");
const button3 = document.querySelector(".btn_3");
const link = document.querySelector("a");

// 1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
function changeBackgroundToBlue() {
    document.body.style.backgroundColor = "blue";
}
// 2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
function changeBackgroundToPink() {
    document.body.style.backgroundColor = "pink";
}
// 3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
function changeBackgroundToBrown() {
    document.body.style.backgroundColor = "brown";
}
function changeBackgroundToWhite() {
    document.body.style.backgroundColor = "white";
}
// 4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
function changeBackgroundToYellow() {
    document.body.style.backgroundColor = "yellow";
}

button1.addEventListener("click", changeBackgroundToBlue);
button2.addEventListener("dblclick", changeBackgroundToPink);
button3.addEventListener("mousedown", changeBackgroundToBrown);
button3.addEventListener("mouseup", changeBackgroundToWhite);
link.addEventListener("mouseover", changeBackgroundToYellow);
link.addEventListener("mouseout", changeBackgroundToWhite);