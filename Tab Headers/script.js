

let tabcontents = document.querySelectorAll(".tabcontent");
let tablinks = document.querySelectorAll(".tablink");

let arr = ["#F44336","#04AA6D","#2196F3","#FF5722"];

tabcontents.forEach((content)=>{
    content.style.display = "none";
});

tabcontents[0].style.display = "block";
tabcontents[0].style.backgroundColor = arr[0];
tablinks[0].classList.add("active");

tablinks.forEach((link)=>{
    link.classList.remove("active");
})

tablinks.forEach((link,index)=>{
    link.addEventListener("click",()=>{
        tabcontents.forEach((content)=>{
            content.style.display = "none";
        });
        tablinks.forEach((l)=>{
            l.classList.remove("active");
        });

        tabcontents[index].style.display="block";
        link.classList.add("active");
        tabcontents[index].style.backgroundColor = arr[index];

    });
});