let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let closebtn = document.getElementById("close");
let navbar =  document.getElementById("sidenav");
let btncontainer =  document.getElementById("btncontainer");

btn1.addEventListener("click",()=>{
    navbar.style.width = "250px";
     navbar.style.transition = "all 0.8s ease";
});

closebtn.addEventListener("click",()=>{
   navbar.style.width = "0px"; 
   btncontainer.style.marginLeft = "0px";
   btncontainer.style.opacity = "";
});

btn2.addEventListener("click",()=>{
    navbar.style.width = "250px";
    navbar.style.transition = "none";
});

btn3.addEventListener("click",()=>{
    navbar.style.width = "250px";
    btncontainer.style.marginLeft = "250px";
     navbar.style.transition = "all 0.8s ease";
});

btn4.addEventListener("click",()=>{
    navbar.style.width = "250px";
    btncontainer.style.marginLeft = "250px";
     navbar.style.transition = "all 0.8s ease";
     btncontainer.style.opacity = "0.5";

});

btn5.addEventListener("click",()=>{
    navbar.style.width = "100%";

});