// capture

const btnModal = document.getElementById('btnModal');

const modalContainer = document.getElementById('modalContainer');

// const closeModal = document.getElementsByClassName('close')[0];
// HTML COLLECTION
const closeModal = document.getElementById('close');
console.log(closeModal);

// Open Modal

btnModal.addEventListener('click', function(){
    modalContainer.style.display = "block";
})

// Close Modal

closeModal.addEventListener('click', function(){
    modalContainer.style.display = "none";
})

// close if not modal
window.addEventListener('click', function(event){
    console.log(event);
    if(event.target === modalContainer){
        event.target.style.display = 'none';
    }
})