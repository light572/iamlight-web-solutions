const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#navLinks");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();
