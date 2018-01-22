// capture button, capture modal container, capture span close

const btnForModal = document.getElementById('btnForModal');

const modalContainer = document.getElementById('modalContainer');

const closeModal = document.getElementById('close');

btnForModal.addEventListener('click', function(){
    modalContainer.style.display = "block";
})

closeModal.addEventListener('click', function(){
    modalContainer.style.display = "none";
})

window.addEventListener('click', function(event){
    // event.target = modal
    if(event.target === modalContainer){
        modalContainer.style.display = "none"
    }
})