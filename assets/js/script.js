document.addEventListener("DOMContentLoaded", function () {
  const colorSets = document.querySelectorAll(".product-card__colors");

  colorSets.forEach((colorSet) => {
    applyColorSelection(colorSet);
  });

  function applyColorSelection(set) {
    const colors = set.querySelectorAll(".product-card__colors--color");

    colors.forEach((color) => {
      color.addEventListener("click", function () {
        if (!this.classList.contains("product-card__color--selected")) {
          colors.forEach((otherColor) => {
            otherColor.classList.remove("product-card__color--selected");
          });
          this.classList.add("product-card__color--selected");
        }
      });
    });
  }
});
