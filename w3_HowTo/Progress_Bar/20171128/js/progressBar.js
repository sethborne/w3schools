function progressBarUpdate() {
    // grab bar
    var elementBar = document.getElementById("bar");
    var width = 0;
    var incrTime = setInterval(frame, 100)
    function frame() {
        if (width >= 100) {
            clearInterval(incrTime)
        } else {
            // increment bar
            width += 5;
            elementBar.style.width = width + "%";
        }
    }
}