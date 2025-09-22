const allDiv = document.querySelectorAll(".div")

const handleDiv = (ev)=>{
    const back = ev.target;
    ev.currentTarget.classList.toggle("rotate")
    /*if(back.classList.contains("back")){
        back.classList.add("hidden")
    }*/
}
/*
const handleMouse = (ev)=>{
    ev.currentTarget.classList.toggle("rotate")
}
*/
for(const div of allDiv){
    div.addEventListener("click", handleDiv)
   // div.addEventListener("mouseover", handleMouse)
}
