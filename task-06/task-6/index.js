
const colorsShoes = document.querySelectorAll("span.color");
const shoes = document.querySelectorAll(".shoe");
let outprice = document.getElementById("outprice");
const gradients = document.querySelectorAll(".gradient");

function removeClass (arr, className) {
    arr.forEach (elem => {
        if (elem.classList.contains(className)) {
            elem.classList.remove(className);
        }});    
}; 

colorsShoes.forEach (color => {
    color.addEventListener("click", function(e) {
        const selectedColor = color.getAttribute("color");
        const selectedShoe = document.querySelector(`.shoe[color = ${selectedColor}]`);
        const gradientShow = document.querySelector(`.gradient[color="${selectedColor}"]`);

        removeClass(colorsShoes, "active");
        removeClass(shoes, "show");
        removeClass(gradients, "second");

        color.classList.add("active");
        selectedShoe.classList.add("show");
        const price = document.querySelector(".active").dataset.price;
        outprice.textContent = `${price} $`;
        gradientShow.classList.add("second");
    });
});