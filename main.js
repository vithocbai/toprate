// Header Fixed
function handleHeader() {
    document.addEventListener("DOMContentLoaded", () => {
        const headerFixed = document.querySelector(".header-fixed");
        const headerHeight = document.querySelector(".header__container");
        const logo = document.querySelector(".logo");
        window.addEventListener("scroll", () => {
            if (scrollY > 0) {
                headerFixed.classList.add("scrolled");
                headerHeight.classList.add("header__height");
                logo.style.width = "198px";
            } else {
                headerFixed.classList.remove("scrolled");
                headerHeight.classList.remove("header__height");
                logo.style.width = "148px";
            }
        });
    });
}

// Focus form
function handleFocusForm() {
    let inputForm = document.querySelectorAll(".contact__input");

    inputForm.forEach((element) => {
        element.addEventListener("input", () => {
            if (element.value.length > 0) {
                element.style.outline = "2px solid #1b1919";
            }
            element.addEventListener("blur", () => {
                element.style.outline = "none";
            });
        });
    });
}

handleHeader();
handleFocusForm()