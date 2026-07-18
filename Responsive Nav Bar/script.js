let tablinks = document.querySelectorAll(".tablink");
let btn = document.querySelector("#btn");



btn.addEventListener("click", () => {
    tablinks.forEach((link) => {
        link.classList.toggle("show");
     
        
    });
});


// tablinks.forEach((link)=>{
//     link.style.display = "none";
// })


// let btnn = true;

// btn.addEventListener("click",()=>{
//     if(btnn === true){
//         tablinks.forEach((link)=>{
//             link.style.display = "block";
//         });
//         btnn = false;
//     }
//     else{
//          tablinks.forEach((link)=>{
//             link.style.display = "";
//         });
//         btnn=true;
//     }
// });