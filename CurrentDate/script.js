var dateval = document.querySelectorAll("#date");
var monthval = document.querySelectorAll("#month");
var yearval = document.querySelectorAll("#year");

var today = new Date();
dateval = today.getDate();
monthval = today.getMonth();
yearval = today.getFullYear();

if(dateval <=9){
    dateval = '0' + dateval;
}

if(monthval <=9){
    monthval = '0' + monthval;
}
if(yearval <=9){
    yearval = '0' + yearval;
}



document.querySelector("#date").textContent = dateval;
document.querySelector("#month").textContent = monthval;
document.querySelector("#year").textContent = yearval;




console.log(dateval);
console.log(monthval);
console.log(yearval);
