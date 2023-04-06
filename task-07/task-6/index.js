function checkWindowSize() {
    const widthWindow = document.getElementById("width");
    const heightWindow = document.getElementById("height");
    widthWindow.textContent = window.innerWidth;
    heightWindow.textContent = window.innerHeight;
  }
  
  window.addEventListener("resize", checkWindowSize);