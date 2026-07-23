let dropdowncontent = document.getElementById("dropdown-content");
let btn = document.getElementById("dropdownbtn");

btn.addEventListener("click",()=>{
    dropdowncontent.classList.toggle("show");
});

window.onclick = function(event){
    if(!event.target.matches('#dropdownbtn')){
        if(dropdowncontent.classList.contains('show')){
            dropdowncontent.classList.remove('show');
        
      }
    }
}