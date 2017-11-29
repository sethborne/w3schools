// console.log("Linked");
var imageThumb = document.getElementById("image");

var modalContainer = document.getElementById("modalContainer");

var spanClose = document.getElementsByClassName("close")[0];
console.log(spanClose);
// click image and make modal come up

imageThumb.onclick = function(){
    modalContainer.style.display = "block";
}

// click on close turn module off

spanClose.onclick = function(){
    modalContainer.style.display = "none";
}

// close if click on modalCOntainer

window.onclick = function(event){
    if(event.target == modalContainer){
        modalContainer.style.display = "none";
    }
}