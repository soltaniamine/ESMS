const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
var btns = document.getElementsByClassName("question");

menu.addEventListener("click", ()=>{
   hundlemenu();
});


function hundlemenu(){
   menu.classList.toggle("is-active");
   actions.classList.toggle("is-active");
}

for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {

   this.classList.toggle("show-answer");
   var answer = this.nextElementSibling;
   if (answer.style.maxHeight){
     answer.style.maxHeight = null;
   } else { 
     for(var j = 0; j<btns.length;j++){
       if (btns[j] !== this){
       btns[j].nextElementSibling.style.maxHeight = null;
       btns[j].classList.remove("show-answer");
       } 
   }
     answer.style.maxHeight = answer.scrollHeight + "px";
   } 


       
     });
 }

 var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}