const themeBtn1 = document.querySelector("#theme1")
const themeBtn2 = document.querySelector("#theme2")
const themeBtn3 = document.querySelector("#theme3")
const allThemeBtns = document.querySelector(".themeBtn")

const themeHandler = (e) => {
	e.preventDefault();
};

themeBtn1.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/assets/background-image-2.jpg')";
});

themeBtn2.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/assets/background-image-5.jpg')";
});

themeBtn3.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/assets/background-image-15.jpg')";
});

allThemeBtns.addEventListener("click", themeHandler);