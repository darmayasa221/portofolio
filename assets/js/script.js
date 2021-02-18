const onMode = document.getElementById("mode")
onMode.addEventListener("click", setMode);
function setMode(){
  let isMode= document.body.classList.toggle("dark")
  if(isMode){
    onMode.setAttribute("src", "assets/img/light.png")
    document.body.setAttribute("class","dark")
  }else{
    onMode.setAttribute("src", "assets/img/dark.png")
    document.body.setAttribute("class","light")
  }
} 
