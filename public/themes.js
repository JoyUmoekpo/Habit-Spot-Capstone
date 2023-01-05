const themeBtn1 = document.querySelector("#theme1")
const themeBtn2 = document.querySelector("#theme2")
const themeBtn3 = document.querySelector("#theme3")

themeBtn1.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/assets/background-image-1.jpg')";
});

themeBtn2.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/assets/background-image-2.jpg')";
});

themeBtn3.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/assets/background-image-3.jpg')";
});