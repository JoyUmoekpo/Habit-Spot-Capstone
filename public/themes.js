let theme1 = document.querySelector("#theme1")
let theme2 = document.querySelector("#theme2")
let theme3 = document.querySelector("#theme3")

// const changeTheme = () => {
//   const theme1 = "background-image-1.jpg";
//   const theme2 = "background-image-2.jpg";
//   const theme3 = "background-image-3.jpg";

//   document.body.style.backgroundColor = `${theme1}, ${theme2}, ${theme3}`;
// }

newTheme.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('assets/background-image-1.jpg')", "url('assets/background-image-2.jpg')", "url('assets/background-image-3.jpg')";
});