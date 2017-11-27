function dropDownOnClick(){
    // when this function runs - needs to change the display property on .contentDropDown to block;
    
    document.getElementById("clickDropDown").classList.toggle("show");
}

// need a function to clear the window if toggle is show

window.onclick = function(event){
    if(!event.target.matches('.btnDropDown')){
        var dropdowns = document.getElementsByClassName("contentDropDown");
        console.log(dropdowns);
        for(var i = 0; i < dropdowns.length; i += 1){
            let openDropDown = dropdowns[i];
            if(openDropDown.classList.contains('show')){
                openDropDown.classList.remove('show');
            }
        }
    }
}