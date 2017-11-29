// console.log("Linked");

var modalContainer = document.getElementById("modalContainer");

var btnModal = document.getElementById("btnModal");

var spanClose = document.getElementsByClassName("close");

//onclick btn show modalContainer

btnModal.onclick = function(){
    modalContainer.style.display = "block";
}

//onclick close noshow modalContainer

spanClose.onclick = function(){
    modalContainer.style.display = "none";
}

// on window click on modalContainer, no show (get event)

window.onclick = function(event){
    if(event.target == modalContainer){
        modalContainer.style.display = "none";
    }
}