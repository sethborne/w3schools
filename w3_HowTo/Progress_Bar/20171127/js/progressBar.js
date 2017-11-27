console.log("Here");
function updateProgress(){
    var element = document.getElementById('bar');
    var width = 0;
    var updateIncr = setInterval(incrUpdate, 100);
    function incrUpdate(){
        if(width >= 100){
            clearInterval(updateIncr);
        }
        else{
            width += 1;
            console.log(width);
            element.style.width = width + "%";
            if(0 < width && width <= 25){
                console.log("1");
                element.style.backgroundColor = "rgba(255, 0, 0, 1)";
            }
            else if(25 < width && width <= 50){
                console.log("2");
                element.style.backgroundColor = "rgba(190, 85, 0, 1)";
            }
            else if(50 < width && width <= 75){
                console.log("3");
                element.style.backgroundColor = "rgba(85, 190, 0, 1)";
            }
            else if(75 < width && width <= 100) {
                console.log("4");
                element.style.backgroundColor = "rgba(0, 255, 0, 1)";
            }
            
        }
    }
}