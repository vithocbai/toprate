// // Focus form
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


