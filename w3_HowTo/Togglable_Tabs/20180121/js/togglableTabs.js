

function toggleTabs(event, tabId){
    // capture all tabcontent
    const allTabContentElements = document.getElementsByClassName('tabContent');
    // caputer all tabMenu
    const allTabMenuElements = document.getElementsByClassName('tabMenu');
    
    // loop and make sure all items are display none (for after the first)
    for(let i = 0; i < allTabContentElements.length; i += 1){
        allTabContentElements[i].style.display = "none";
    }
    // loop through all tabContents, and remove active if its there
    for(let i = 0; i < allTabMenuElements.length; i += 1){
        allTabMenuElements[i].className = allTabMenuElements[i].className.replace(' active', '')
    }
    
    
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}