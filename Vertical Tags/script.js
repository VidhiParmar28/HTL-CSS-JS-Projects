function opencity(event,cityName){
    let btns = document.getElementsByClassName("tablinks");
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove("active");
    }

    let contents = document.getElementsByClassName("tabcontent");
    for(let i=0;i<contents.length;i++){
        contents[i].style.display = "none";
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTarget.classList.add("active");
}
