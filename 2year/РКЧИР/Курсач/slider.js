//Получаем массив всех слайдов
var slides = document.querySelectorAll(".slides li");

var slider = document.querySelector(".slider");

//Кнопки вперед и назад
var btnPrev = document.getElementsByClassName("left_arr")[0];
var btnNext = document.getElementsByClassName("right_arr")[0];

var visibleSlide = 0;

var slideWidth; 

start();

window.onresize = start;


function start() {
    
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    if (screenWidth/screenHeight > 0.75) {
        slideWidth = 25;
    }
    else if (screenWidth/screenHeight <= 0.75) {
        slideWidth = 50;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = (i-visibleSlide)*slideWidth + "%";
    }
    
    if (slides.length-1 - visibleSlide < 100/slideWidth) visibleSlide = slides.length - 100/slideWidth;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = (i-visibleSlide)*slideWidth + "%";
    }
    
}

btnPrev.addEventListener("click", function() {
    
    if (visibleSlide > 0) {
        visibleSlide--;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = (i-visibleSlide)*slideWidth + "%";
        }
    }
});

btnNext.addEventListener("click", function() {
    
    if (visibleSlide < slides.length - 100/slideWidth) {
        visibleSlide++;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = (i-visibleSlide)*slideWidth + "%";
        }
    }
});
