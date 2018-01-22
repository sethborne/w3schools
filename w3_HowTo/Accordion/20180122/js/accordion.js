// capture groups

const allMain = document.getElementsByClassName('accMain');
// // HTML COLLECTION


for(let i = 0; i < allMain.length; i += 1){
    allMain[i].addEventListener('click', function(){
        
//         // get panel
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none"
        } else {
            panel.style.display = "block";
        }
    })
}

// console.log("connected");