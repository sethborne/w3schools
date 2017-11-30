// console.log("Linked")

// grab modalElement

var modalContainer = document.getElementById("modalContainer");

var spanClose = document.getElementsByClassName("close")[0];

function openModal(){
    modalContainer.style.display = "block";
}

function closeModal(){
    modalContainer.style.display = "none";
}


// 
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    console.log(n);
    showSlides(slideIndex = n);
}

function showSlides(n){
    
    var slides = document.getElementsByClassName("mySlide");
    
    var captionText = document.getElementById("caption");
    
    var thumbs = document.getElementsByClassName("thumbnail");
    // conditionals for edge cases
    if(n > slides.length - 1){ slideIndex = 0 };
    if(n < 0) { slideIndex = slides.length - 1};
    // loops for displays
    for(let i = 0; i < slides.length; i += 1){
        slides[i].style.display = "none";
    }
    // loop for dots
    for(let i = 0; i < thumbs.length; i += 1){
        thumbs[i].className = thumbs[i].className.replace(' active', "");
    }
    slides[slideIndex].style.display = "block";
    thumbs[slideIndex].className += " active";
    captionText.innerHTML = thumbs[slideIndex].alt;
}


