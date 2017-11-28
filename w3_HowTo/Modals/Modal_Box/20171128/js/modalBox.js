// console.log("Linked")

// get global
var modalContainer = document.getElementById("modalContainer");

// button to open modal

var btnToOpenModal = document.getElementById("btnForModal")

// span element later
var spanElement = document.getElementsByClassName("close")[0];
console.log(spanElement);



// click the button open modal
btnToOpenModal.onclick = function(){
    modalContainer.style.display = "block";
}

// click to close the modal
spanElement.onclick = function(){
    modalContainer.style.display = "none";
}

// user clicks outside the modal, close it
window.onclick = function(event){
    if(event.target == modalContainer){
        modalContainer.style.display = "none";
    }
}