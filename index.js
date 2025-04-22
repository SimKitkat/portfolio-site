const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when clicking outside or on a link
document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

nav.addEventListener("click", function () {
  nav.classList.remove("active");
});
