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
        geoFlag.style.width = "15px";
        geoFlag.style.height = "15px"
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

//slider 
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}