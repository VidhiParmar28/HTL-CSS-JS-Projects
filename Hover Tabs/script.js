let tablinks = document.querySelectorAll(".tablink");
let tabcontents = document.querySelectorAll(".tabcontent");
let arr = ["#0075b8","#ab8ee5","#27a16c"];

tabcontents.forEach((content)=>{
    content.style.display = "none";
})

tabcontents[0].style.display = "block";
tabcontents[0].style.backgroundColor = arr[0];
tablinks[0].classList.add("active");

// tablinks.forEach((link)=>{
//     link.classList.remove("active");
// })


tablinks.forEach((link,index)=>{

    link.addEventListener("mouseover",()=>{
        tabcontents.forEach((content)=>{
            content.style.display = "none";
        });

        tablinks.forEach((l)=>{
            l.classList.remove("active");
        });
        tabcontents[index].style.display = "block";
        tabcontents[index].style.backgroundColor = arr[index];
        link.classList.add("active");
    });
});