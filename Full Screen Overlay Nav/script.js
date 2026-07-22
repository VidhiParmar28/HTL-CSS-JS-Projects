let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let navbar1 = document.getElementById("sidenav1");
let navbar2 = document.getElementById("navbar2");
let navbar3 = document.getElementById("navbar3");
let closebtn1 = document.getElementById("closebtn1");
let closebtn2 = document.getElementById("closebtn2");
let closebtn3 = document.getElementById("closebtn3");
let btncontainer = document.getElementById("btncontainer");

btn1.addEventListener("click",()=>{
    navbar1.style.width = "100%";
    navbar1.style.height = "100%";
    btncontainer.style.width = "0px";
    navbar1.style.textAlign ="center";
    closebtn1.style.marginLeft = "90px";
});


btn2.addEventListener("click",()=>{
    navbar2.style.height = "100%";
    navbar2.style.width = "100%";
    navbar2.style.flexDirection = "column";
    navbar2.style.textAlign ="center";
    closebtn2.style.marginLeft = "90px";
});

btn3.addEventListener("click",()=>{
    navbar3.style.width = "100%";
    navbar3.style.height = "100%";
    btncontainer.style.width = "0px";
    btncontainer.style.height = "0px";
    navbar3.style.textAlign ="center";
    closebtn3.style.marginLeft = "90px";

});


closebtn1.addEventListener("click",()=>{
    navbar1.style.width = "0px";
    btncontainer.style.width = "100%";
    

});

closebtn2.addEventListener("click",()=>{
    navbar2.style.height = "0px";
    navbar2.style.width = "0px";
     btncontainer.style.height= "100%";

});

closebtn3.addEventListener("click",()=>{
    navbar3.style.height = "0px";
    navbar3.style.width = "0px";
     btncontainer.style.width = "100%";
     btncontainer.style.height= "100%";

});





