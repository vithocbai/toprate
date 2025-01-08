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

    clickBars.addEventListener('click', ()=>{
        drawerMenu.style.transform = "translateY(0%)";
        overlay.style.visibility = "visible";
    })

    closeDrawer.onclick = function() {
        drawerMenu.style.transform = "translateY(-100%)";
        overlay.style.visibility = "hidden";
    }

}

// Focus form
function handleFocusForm() {
    const inputForm = document.querySelectorAll(".contact__input");

    inputForm.forEach((element) => {
        element.addEventListener("input", () => {
            if(element.value.length > 0) {
                element.style.outline = "2px solid #1b1919";
            }
            element.addEventListener("blur", () => {
                element.style.outline = "none";
            });
        });
    });
}

// Back Top
const gotoTop = document.getElementById("gotoTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("gotoTop").style.display = "block";
    } else {
        document.getElementById("gotoTop").style.display = "none";
    }
   
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $('html, body').animate({scrollTop:0}, 'slow');
}

gotoTop.onclick = function() {
    topFunction()
}


handleHeader();
handleOpenCloseDrawer();
handleFocusForm();
