// Toggle aktif
const navbarNav = document.querySelector(".navbar-nav");
// ketika pesan menu diklik
document.querySelector("#figma").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik luar sidebar buar menghilangkan nav
const pesan = document.querySelector("#figma");

document.addEventListener("click", function (e) {
  if (!pesan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
