var firstnum = document.querySelector("#firstnum");
var secondnum = document.querySelector("#secondnum");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var result = document.querySelector("#result");

multiply.addEventListener("click", () =>{
    const num1 = Number(firstnum.value.trim());
    const num2 = Number(secondnum.value.trim());
    console.log(result.innerText =`The Result Is : ${num1 * num2}`);


})


divide.addEventListener("click", () =>{
    const num1 = Number(firstnum.value.trim());
    const num2 = Number(secondnum.value.trim());
    
    console.log(result.innerText =`The Result Is : ${num1 / num2}`);

})


