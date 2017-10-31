console.log("Temp");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slideTile");
    var dots = document.getElementsByClassName("dot");
    if( n > slides.length ){
        slideIndex = 1;
    }
    if( n < 1 ){
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i += 1){
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i += 1){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}