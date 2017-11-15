// first slide
var slideIndex = 0;
console.log(showSlides(slideIndex));
showSlides(slideIndex);

function changeSlide(numValChange) {
    showSlides(slideIndex += numValChange)
}

function currentSlide(numValSlide){
    console.log(numValSlide);
    slideIndex = numValSlide;
    showSlides(numValSlide);
}

function showSlides(numValIndex){
    // iterator
    // var i;
    // get slides 
    var slides = document.getElementsByClassName("slides");
    console.log(slides);
    // this is for the dots
    var dot = document.getElementsByClassName("dot");
    console.log(dot);
    // edge condition in changeSlides - if numValIndex is greater than length, start at beginning
    if(numValIndex >= slides.length){
        slideIndex = 0;
        console.log("Greater Than");
    }
    // edge condition in changeSlides - if numValIndex is Less than 1, then set slide index to length?
    if(numValIndex < 0){
        slideIndex = slides.length - 1;
        console.log("Less Than");
    }
    // toggle all slides off
    for(let i = 0; i < slides.length; i += 1){
        slides[i].style.display = "none";
    }
    // this should toggle the color of the dot
    for(let i = 0; i < dot.length; i += 1){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    console.log(slides[slideIndex]);
    slides[slideIndex].style.display = "block";
    dot[slideIndex].className += " active"
}