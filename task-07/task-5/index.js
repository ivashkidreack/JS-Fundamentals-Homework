const button = document.querySelector(".btn");
const text = document.querySelector("p");


button.addEventListener("click", function() {
    text.textContent += "I was pressed!\n";
});
  
button.addEventListener("mouseover", function() {
    text.textContent += "Mouse on me!\n";
});
  
button.addEventListener("mouseleave", function() {
    text.textContent += "Mouse is not on me!\n";
});