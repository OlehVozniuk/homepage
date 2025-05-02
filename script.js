// script.js

document.addEventListener("DOMContentLoaded", () => {
  const animatedBlocks = document.querySelectorAll(
    ".skills, .experiences__company, .additional-info__education, .additional-info__languages"
  );

  animatedBlocks.forEach((block) => {
    block.classList.add("animate-visible");
  });
});
