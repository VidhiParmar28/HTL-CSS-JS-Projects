

var datee = document.querySelectorAll(".date");
var day = document.querySelectorAll(".day");
var month = document.querySelectorAll(".month");
var year = document.querySelectorAll(".year");


var mon = ["jan" , "feb" , "mar" , "apr" , "may" ,"june" , "july" , "aug" , "sep" , "oct" , "nov" , "dec"];
var day = ["monday" ,"tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"];


var today = new Date(); 

var datee = today.getDate();
var month = mon.at(today.getMonth());
var year = today.getFullYear();
var day = day.at(today.getDay());


if(datee<10){
    datee='0' + datee;
}

document.querySelector(".date").textContent = datee;
document.querySelector(".day").textContent = day;
document.querySelector(".month").textContent = month;
document.querySelector(".year").textContent = year;

console.log(datee);
console.log(day);
console.log(month);
console.log(year);

