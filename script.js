const searchContainer = document.querySelector(".container")
const magnifierEl = document.querySelector(".magnifier")
const minIconEl = document.querySelector(".mic-icon")

magnifierEl.addEventListener("click", () => {
    searchContainer.classList.toggle("active")
})