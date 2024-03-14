document.addEventListener("DOMContentLoaded", function () {
  const colors = document.querySelectorAll(".color");

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
});
