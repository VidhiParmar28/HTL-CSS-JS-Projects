var para1  = document.querySelector("#showdays");
var para2 =  document.querySelector("#showmonth");
var d = new Date();

var checkdate = 25;
var checkmonth = 11;

var date = d.getDate();
var month = d.getMonth()+1;
var year = d.getFullYear();




if((date < 25)){

    var finaldate  = checkdate - date ;
    // console.log(`Today is ${date}/${month}`)
//    console.log(`${finaldate} days left until Christmas! `);
//    
   document.querySelector("#showdays").textContent = `${finaldate} days left until Christmas! `
}
else{
    var finaldate  = date - checkdate ;
    // console.log(`Today is ${date}/${month}`)
    // console.log(`${date - checkdate}days remaining`);
    //    console.log(`${finaldate} days left until Christmas! `);
   document.querySelector("#showdays").textContent = `${finaldate} days left until Christmas! ` ;
}

if((month < 11)){
    var finalmonth = checkmonth - month;
    // console.log(`Today is ${date}/${month}`)
    // console.log(`${checkmonth - month} month left until Christmas! `);
    document.querySelector("#showmonths").textContent = `${finalmonth} months left until Christmas! `;
}
else{
    var finalmonth  = month - checkmonth ;
    // console.log(`Today is ${date}/${month}`)
    // console.log(`${month - checkmonth} month remaining`);
    document.querySelector("#showmonths").textContent = `${finalmonth} months left until Christmas! `;
}




