// const allAccordions = document.getElementsByClassName('accAccordion');
// // loop through
// for(let i = 0; i < allAccordions.length; i += 1){
//     //if one is clicked
//     console.log(allAccordions[i]);
//     allAccordions[i].addEventListener('click', function(){
//         // could give active
//         // capture acc's panel
//         let togglePanel = this.nextElementSibling;
//         // conditional panel toggle
//         console.log(togglePanel);
//         console.log(togglePanel.style.display);
//         if(togglePanel.style.display === "none"){
//             togglePanel.style.display = "block";
//         } else {
//             togglePanel.style.display = "none";
//         }
//         console.log(togglePanel.style.display);
//     })
// }

function openPanel(panelNumber){
    // console.log("Open Panel");
    const allAccordions = document.getElementsByClassName('accAccordion');
    // console.log(allAccordions);
    console.log(allAccordions[panelNumber]);
    allAccordions[panelNumber].classList.toggle('active')
    let togglePanel = allAccordions[panelNumber].nextElementSibling;
    if(togglePanel.style.display === "block"){
        togglePanel.style.display = "none";
    } else {
        togglePanel.style.display = "block";
    }
}