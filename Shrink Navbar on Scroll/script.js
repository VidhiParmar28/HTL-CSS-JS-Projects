let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");

window.onscroll =  function(){
 onscrollFunction();
};

function onscrollFunction(){
    if(document.body.scrollTop >80 || document.documentElement.scrollTop>80){
        navbar.style.padding = "5px";
        logo.style.padding = "10px";
    }
    else{
         navbar.style.padding = "50px";
        logo.style.padding = "10px";
    }
}