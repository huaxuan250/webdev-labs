const makeBigger = () => {
  const curr_h1 = document.querySelector("div header h1");
  const curr_h1_size = window
    .getComputedStyle(curr_h1, null)
    .getPropertyValue("font-size");

  const curr_content = document.querySelector("div .content p");
  const curr_content_size = window
    .getComputedStyle(curr_content, null)
    .getPropertyValue("font-size");

  const h1size = parseFloat(curr_h1_size);
  const psize = parseFloat(curr_content_size);

  curr_h1.style.fontSize = h1size + 1 + "px";
  curr_content.style.fontSize = psize + 1 + "px";
};

const makeSmaller = () => {
  const curr_h1 = document.querySelector("div header h1");
  const curr_h1_size = window
    .getComputedStyle(curr_h1, null)
    .getPropertyValue("font-size");

  const curr_content = document.querySelector("div .content p");
  const curr_content_size = window
    .getComputedStyle(curr_content, null)
    .getPropertyValue("font-size");

  const h1size = parseFloat(curr_h1_size);
  const psize = parseFloat(curr_content_size);

  curr_h1.style.fontSize = h1size + 1 + "px";
  curr_content.style.fontSize = psize + 1 + "px";
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);
