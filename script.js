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

/*
email validation - https://blog.logrocket.com/web-animation-with-html-css-and-javascript/
*/