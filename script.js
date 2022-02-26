const navbar = document.querySelector(".navbar");
const toggleButton = document.querySelector(".burger-menu-toggle-button");
const toggleButtonIcon = toggleButton.querySelector("#burger-menu-icon");
const toggleBurgerMenu = () => {
    const visibility = navbar.getAttribute("data-visible");
    if (visibility === "false") {
        navbar.setAttribute("data-visible", "true");
        toggleButtonIcon.className = "fa-solid fa-xmark"
    } else if (visibility === "true") {
        navbar.setAttribute("data-visible", "false");
        toggleButtonIcon.className = "fa-solid fa-bars"
    }
}

toggleButton.addEventListener("click", toggleBurgerMenu)