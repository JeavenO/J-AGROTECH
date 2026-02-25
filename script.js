// Hero title animation
window.addEventListener("load", () => {
  const title = document.getElementById("title");
  title.style.opacity = 0;
  setTimeout(() => {
    title.style.transition = "opacity 2s ease";
    title.style.opacity = 1;
  }, 500);
});
