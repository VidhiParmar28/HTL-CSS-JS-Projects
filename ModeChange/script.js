let btn = document.querySelector(".btn");

let current = "light";


btn.addEventListener("click", () => {
    if(current === "light" ){
        current="dark";
        document.querySelector("body").style.backgroundColor = "black";
        btn.style.backgroundColor = "white";

    }
    else{
        current="light";
        document.querySelector("body").style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
    }
    console.log(current);
});

// btn.addEventListener("click",() =>{
//     if(current)
//     btn.style.backgroundColor = ""
// })