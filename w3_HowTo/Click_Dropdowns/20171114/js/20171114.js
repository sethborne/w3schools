function clickDropdown() {
    document.getElementById("clickDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches(".clickDropdownButton")){
        var dropdowns = document.getElementsByClassName("clickDropdownContent");
        for(let i = 0; i < dropdowns.length; i += 1){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}