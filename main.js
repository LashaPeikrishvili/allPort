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