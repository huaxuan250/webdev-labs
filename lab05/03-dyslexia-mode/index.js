/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const changeTheme = () => {
  const curr_theme = document.querySelector("body").className;
  if (curr_theme === "dyslexia-mode") {
    document.querySelector("body").className = "";
  } else {
    document.querySelector("body").className = "dyslexia-mode";
  }
};

// We want to change the header color, body color, as well as font color
document
  .querySelector("#dyslexia-toggle")
  .addEventListener("click", changeTheme);
