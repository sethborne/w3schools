// get elements
var accordion = document.getElementsByClassName("accordion");
console.log(accordion);

for(let i = 0; i < accordion.length; i += 1){
    accordion[i].onclick = function(){
        //toggle
        this.classList.toggle("active");
        
        //hiding
        var panel =this.nextElementSibling;
        // if(panel.style.display === "block"){
        //     panel.style.display = "none";
        // }
        // else {
        //     panel.style.display = "block";
        // }
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}