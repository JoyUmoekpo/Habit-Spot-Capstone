let newTheme = document.querySelector("#themes")

const changeTheme = () => {
  const theme1 = Math.floor(Math.random() * "/assets");

  document.body.style.backgroundColor = `${theme1}`;
}

newTheme.addEventListener("click", changeTheme);