// togle tooltip

const shareBtns = document.querySelectorAll(".share-btn");
console.log(shareBtns);
const previewElement = document.querySelector(".preview");

shareBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    previewElement.classList.toggle("onshare");
  });
});
