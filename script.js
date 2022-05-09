/* 

about.html - 3
achivements.html - 3
hobbies.html - 3
plan.html 3

documents.html - 2
recommendations - 0
resume.html - 6


portfolio.html - 8
    about me - 3
    chronoshift - 3
    flew - 3
    end of dragons - 3
    personal statement - 3
    adhd - 3
    boyle - 3
    journal - 3

index .html - 3


TOTAL IMAGES = 47


    light blue - #A7CFE8
        blue accent - #A9D9E6

    pinkish red - #EF6968
            pink accent - #F5B3B3

    dark blue - #232F5F
        dark blue accent - #364588

    yellow - #FEEA7F

https://colorpalettes.net/color-palette-1884/
*/
var pos = 0;
carouselDemo(pos);

function add(n) {
    carouselDemo(pos += n);
}

function current(n) {
    carouselDemo(pos = n);
}


function carouselDemo(n) {
    var i;
    var slide = document.getElementsByClassName("carouselChild");
    var circles = document.getElementsByClassName("circle");
    if (n > slide.length) {
        pos = 1;
    }
    if (n < 1) {
        pos = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" on", "");
    }
    const slideStyle = "block";
    slide[pos - 1].style.display = slideStyle;
    circles[pos - 1].className += " on";
} 
