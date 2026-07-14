var btns = document.getElementsByClassName("btn");

for(var i=0; i< btns.length ; i++){
    btns[i].addEventListener("click" , function() {

        this.classList.toggle("active");
        

        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    })
}