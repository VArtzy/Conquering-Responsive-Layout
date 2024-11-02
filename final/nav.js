const hamburger = document.querySelector(".hamburger")
const nav_visible = document.querySelector(".nav__visible")

hamburger.addEventListener("click", () => {
    nav_visible.classList.toggle("nav__visible")
})
