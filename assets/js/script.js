document.addEventListener("DOMContentLoaded", function () {
  const colorSets = document.querySelectorAll(".colors");

  colorSets.forEach((colorSet) => {
    applyColorSelection(colorSet);
  });

  function applyColorSelection(set) {
    const colors = set.querySelectorAll(".color");

    colors.forEach((color) => {
      color.addEventListener("click", function () {
        if (!this.classList.contains("color-selected")) {
          colors.forEach((otherColor) => {
            otherColor.classList.remove("color-selected");
          });
          this.classList.add("color-selected");
        }
      });
    });
  }
});
