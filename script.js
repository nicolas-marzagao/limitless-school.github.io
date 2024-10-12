const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// toggle menu visibility on mobile
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

//close menue when close button clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ())