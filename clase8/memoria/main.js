const allDiv = document.querySelectorAll(".div")

const handleDiv = (ev)=>{
    const back = ev.target;
    if(back.classList.contains("back")){
        back.classList.add("hidden")
    }
}

for(const div of allDiv){
    div.addEventListener("click", handleDiv)
}