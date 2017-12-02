// console.log("Linked");

var slider = document.getElementById("range");

var captionText = document.getElementById("captionText");

captionText.innerHTML = slider.value;

slider.oninput = function(){
    // console.log(this.value);
    captionText.innerHTML = this.value;
}