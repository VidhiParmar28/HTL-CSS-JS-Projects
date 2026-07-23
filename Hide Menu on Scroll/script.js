// let navbar = document.getElementById("navbar");

// window.onscroll = function() {
//  scrollFunction();
// };

// function scrollFunction(){
// if(document.body.scrollTop >20 || document.documentElement.scrollTo>20){
//     navbar.style.top = "-100px";
// }
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}