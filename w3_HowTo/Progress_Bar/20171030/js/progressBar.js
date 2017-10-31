function moveStatus(){
    let statusBar = document.getElementById("statusBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame(){
        if(width >= 100){
            clearInterval(id);
        } else {
            width += 1;
            statusBar.style.width = width + "%";
            statusBar.innerHTML = width * 1 + "%"
        }
    }
}