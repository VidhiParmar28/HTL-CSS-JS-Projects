let input = document.getElementById("searchbar");
let options = document.querySelectorAll(".options");


input.addEventListener("input",()=>{
    let search = input.value.toLowerCase();

options.forEach((option)=>{
    let text  = option.textContent.toLowerCase();
    if(text.includes(search)){
        option.style.display = "";
    }
       else{
            option.style.display = "none";
        }
});
});


