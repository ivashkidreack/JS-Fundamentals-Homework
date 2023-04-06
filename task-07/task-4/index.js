function deleteOption() {
    const select = document.getElementById("names");
    const selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
      select.remove(selectedIndex);
    }
  };