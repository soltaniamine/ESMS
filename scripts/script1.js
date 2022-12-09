var containers = document.getElementsByClassName("container-day");
const btn = document.getElementById("btn1");



  btn.addEventListener("click",nextday);

function nextday(){
  for( let i = 0; i<3;i++){
    if(containers[i].classList.contains("showing")){
      containers[i].classList.remove("showing");
      containers[i].classList.add("hide");

      containers[((i+1) % 3)].classList.remove("hide");
      containers[((i+1) % 3)].classList.add("showing");
      return;

      }
  }
  containers[0].classList.remove("showing");
  containers[0].classList.add("hide");

  containers[1].classList.remove("hide");
  containers[1].classList.add("showing");

}