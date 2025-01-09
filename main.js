// Header Fixed
function handleHeader() {
    document.addEventListener("DOMContentLoaded", () => {
        const headerFixed = document.querySelector(".header-fixed");
        const headerHeight = document.querySelector(".header__container");
        const logo = document.querySelector(".logo");
        const bars = document.querySelector(".bars");
        const menuDrawer = document.querySelector(".menu-drawer");
        window.addEventListener("scroll", () => {
            if (scrollY > 0) {
                headerFixed.classList.add("scrolled");
                headerHeight.classList.add("header__height");
                logo.style.width = "198px";
                bars.classList.add("scrolled");
                menuDrawer.style.padding = "4px";
            } else {
                headerFixed.classList.remove("scrolled");
                headerHeight.classList.remove("header__height");
                logo.style.width = "148px";
                bars.classList.remove("scrolled");
                menuDrawer.style.padding = "20px";
            }
        });
    });
}

// Menu-drawer
function handleOpenCloseDrawer() {
    const clickBars = document.querySelector(".bars");
    const drawerMenu = document.querySelector(".menu-drawer");
    const closeDrawer = document.querySelector(".menu-close");
    const overlay = document.querySelector(".overlay");

    clickBars.addEventListener("click", () => {
        drawerMenu.style.transform = "translateY(0%)";
        overlay.style.visibility = "visible";
    });

    closeDrawer.onclick = function () {
        drawerMenu.style.transform = "translateY(-100%)";
        overlay.style.visibility = "hidden";
    };
}

// Focus form
function handleFocusForm() {
    const inputForm = document.querySelectorAll(".contact__input");

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
handleOpenCloseDrawer();
handleFocusForm();

// Back Top
const gotoTop = document.getElementById("gotoTop");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("gotoTop").style.display = "block";
    } else {
        document.getElementById("gotoTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

gotoTop.onclick = function () {
    topFunction();
};

// Convert Language
// let translations;
// fetch("./assets/i18n/languages.json")
//     .then((response) => response.json())
//     .then((data) => {
//         translations = data;
//         updateLanguage("en"); // Default language is English
//     })
//     .catch((error) => console.error("Error loading language file:", error));

// // Function to update content
// function updateLanguage(lang) {
//     const elements = document.querySelectorAll("[data-i18n]");
//     elements.forEach((el) => {
//         const keys = el.dataset.i18n.split(".");
//         let text = translations[lang];

//         // Traverse the keys to find the correct translation
//         keys.forEach((key) => {
//             if (text) {
//                 text = text[key];
//             }
//         });

//         // Handle different element types
//         if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
//             el.placeholder = text; // Update placeholder for input/textarea elements
//         } else if (Array.isArray(text) && el.tagName.toLowerCase() === "a") {
//             const index = [...el.parentNode.children].indexOf(el);
//             el.innerHTML = text[index]; // Use innerHTML for anchor links
//         } else if (text) {
//             el.innerHTML = text; // Use innerHTML for other elements
//         }
//     });
// }

// // Handle language selection
// document.querySelectorAll(".navigation__link[data-lang]").forEach((link) => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();
//         const lang = this.dataset.lang; // Get language code
//         updateLanguage(lang); // Update content
//     });
// });

// const translations = {
//     en: null,
//     vn: null,
//     jp: null,
// };

// // Load translation files
// const loadTranslation = async (lang) => {
//     if (!translations[lang]) {
//         const response = await fetch(`./assets/i18n/${lang}.json`);
//         if (!response.ok) throw new Error(`Cannot load ${lang}.json`);
//         translations[lang] = await response.json();
//     }
//     return translations[lang];
// };

// // Apply translations
// const applyTranslations = (lang) => {
//     loadTranslation(lang)
//         .then((data) => {
//             document.querySelectorAll("[data-i18n]").forEach((element) => {
//                 const keys = element.getAttribute("data-i18n").split(".");
//                 let translation = data;

//                 // Resolve nested keys
//                 keys.forEach((key) => {
//                     translation = translation ? translation[key] : null;
//                 });

//                 // Update the text content
//                 if (translation) {
//                     element.textContent = translation;
//                 } else {
//                     console.warn(`Translation missing for ${element.getAttribute("data-i18n")}`);
//                 }
//             });

//             // Update <html> lang attribute
//             document.documentElement.setAttribute("lang", lang);
//         })
//         .catch((error) => {
//             console.error(`Error applying translations: ${error.message}`);
//         });
// };

// // Event listeners for language change
// document.querySelectorAll("[data-lang]").forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         event.preventDefault();
//         const lang = btn.getAttribute("data-lang");
//         applyTranslations(lang);

//         // Save selected language to localStorage
//         localStorage.setItem("selectedLang", lang);
//     });
// });

// // Load saved language or default to 'en'
// const savedLang = localStorage.getItem("selectedLang") || "en";
// applyTranslations(savedLang);

const translations = {
    en: null,
    vn: null,
    jp: null,
};

// Load translation files
const loadTranslation = async (lang) => {
    if (!translations[lang]) {
        const response = await fetch(`./assets/i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Cannot load ${lang}.json`);
        translations[lang] = await response.json();
    }
    return translations[lang];
};

// Apply translations
const applyTranslations = (lang) => {
    loadTranslation(lang)
        .then((data) => {
            document.querySelectorAll("[data-i18n]").forEach((element) => {
                const keys = element.getAttribute("data-i18n").split(".");
                let translation = data;

                // Resolve nested keys
                keys.forEach((key) => {
                    translation = translation ? translation[key] : null;
                });

                // Check if translation exists
                if (translation) {
                    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                        // If input or textarea, set placeholder
                        element.setAttribute("placeholder", translation);
                    } else {
                        // Otherwise, update innerHTML
                        element.innerHTML = translation;
                    }
                } else {
                    console.warn(`Translation missing for ${element.getAttribute("data-i18n")}`);
                }
            });

            // Update <html> lang attribute
            document.documentElement.setAttribute("lang", lang);

            // After translations are applied, update the service list
            updateServiceList(lang);
        })
        .catch((error) => {
            console.error(`Error applying translations: ${error.message}`);
        });
};

// Event listeners for language change
document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        const lang = btn.getAttribute("data-lang");
        applyTranslations(lang);

        // Save selected language to localStorage
        localStorage.setItem("selectedLang", lang);
    });
});

// Update service list based on the language
function updateServiceList(lang) {
    var listItems = document.querySelectorAll(".services__item-web");

    // Only hide last two items for Vietnamese or Japanese
    if (lang === "vn" || lang === "jp") {
        for (var i = 3; i < listItems.length; i++) {
            listItems[i].style.display = "none";
        }
    } else {
        // Show all items if the language is not Vietnamese or Japanese (e.g., English)
        listItems.forEach((item) => {
            item.style.display = "list-item"; // Ensure all items are shown
        });
    }
}

// Load saved language or default to 'en'
const savedLang = localStorage.getItem("selectedLang") || "en";
applyTranslations(savedLang);
