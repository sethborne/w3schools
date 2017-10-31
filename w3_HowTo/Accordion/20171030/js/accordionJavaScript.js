// get accordion

var accordionDiv = document.getElementsByClassName("accordion");
console.log(accordionDiv);
// var i;

for(let i = 0; i < accordionDiv.length; i += 1){
    function closeCurrentlyActivePanels(accordionDiv){
        for(let j = 0; j < accordionDiv.length; j += 1){
            if(accordionDiv[j].classList.contains("active")){
                accordionDiv[j].classList.remove("active");
                accordionDiv[j].nextElementSibling.style.display = "none";
            }
        }
    }
    // console.log(i);
    accordionDiv[i].onclick = function(){
        // this function will allow only one active, open panel at a time
        // closeCurrentlyActivePanels(accordionDiv);
        this.classList.toggle("active");

        
        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block"
        }
    }
}