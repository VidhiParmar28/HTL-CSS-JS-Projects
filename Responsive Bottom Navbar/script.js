let closebtn = document.getElementById("closebtn");
let navbar1 = document.getElementById("navbar1");
let a = document.getElementsByName("a");
let links = document.getElementsByClassName("links");



closebtn.addEventListener("click",()=>{
    // if(navbar1.className === "navbar"){
    //     navbar1.className += " responsive";
    // }
    // else{
    //     navbar1.className = "navbar"
    // }
    navbar1.classList.toggle("responsive");

});