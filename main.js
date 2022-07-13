let usaFlag = document.querySelector(".usa");
let geoFlag = document.querySelector(".geo");
let languages = document.querySelector(".languages")
let usaEn = document.querySelector(".usaEn");
let geoGe = document.querySelector(".geoGe")
languages.addEventListener("click", function () {
    if (languages.value == 1) {
        usaFlag.style.display = "block";
        geoFlag.style.display = "none";
    } else if (languages.value == 2) {
        usaFlag.style.display = "none";
        geoFlag.style.display = "block";
    }

})



let search = document.querySelector(".search");

let input = document.querySelector(".input");
let img = document.querySelector(".img-search");
let hasPlaceholder = false;

img.addEventListener("click", function () {

    input.classList.toggle("style")
    if (hasPlaceholder == true) {
        input.removeAttribute("placeholder");
        hasPlaceholder = false;
    } else {
        input.setAttribute("placeholder", "search");
        hasPlaceholder = true;
    }

})