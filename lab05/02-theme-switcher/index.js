/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (theme) => {
  document.querySelector("body").className = theme;
};

// We want to change the header color, body color, as well as font color
document
  .querySelector("#default")
  .addEventListener("click", (e) => changeTheme("default"));
document
  .querySelector("#desert")
  .addEventListener("click", (e) => changeTheme("desert"));
document
  .querySelector("#ocean")
  .addEventListener("click", (e) => changeTheme("ocean"));
document
  .querySelector("#high-contrast")
  .addEventListener("click", (e) => changeTheme("high-contrast"));
