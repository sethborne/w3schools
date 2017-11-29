// console.log("Linked");

// capture id modalContainer

var modalContainer = document.getElementById("modalContainer");

var btnModal = document.getElementById("btnModal");

var spanClose = document.getElementsByClassName("close")[0];

// click button, get modal
btnModal.onclick = function(){
    modalContainer.style.display = "block";
}

// click corner, close modal
spanClose.onclick = function(){
    modalContainer.style.display = "none";
}

// if not modalContent, then close modal, takes (event)
window.onclick = function(event){
    if(event.target == modalContainer){
        modalContainer.style.display = "none";
    }
}

