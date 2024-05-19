
for(let i = 0; i <7;i++){
    document.querySelectorAll(".grid-item")[i].addEventListener("mouseover",()=>{
        document.querySelectorAll(".grid-item")[i].style.backgroundColor = "cyan";
         
    })  
    document.querySelectorAll(".grid-item")[i].addEventListener("click",()=>{
        var char = document.querySelectorAll(".grid-item")[i].textContent.toLowerCase().trim();

        var audio = new Audio(`./sound/piano-note-${char}.wav`);
        audio.play(); 
     })
     document.querySelectorAll(".grid-item")[i].addEventListener("mouseout",()=>{
        document.querySelectorAll(".grid-item")[i].style.backgroundColor = "white"
        })
}


document.addEventListener("keydown", check);



function check(event){
     let wordPress = "";
            
    document.querySelectorAll(".grid-item").forEach((item)=>{
        if(event.key.toLowerCase() === item.textContent.toLowerCase().trim()){
            wordPress = item.textContent.toLowerCase().trim();
        }
    })
    if(wordPress){
        document.querySelector(`.${wordPress}-note`).style.backgroundColor = "cyan";
        setTimeout(()=>{
            document.querySelector(`.${wordPress}-note`).style.backgroundColor = "white";
        },100)
        var audio = new Audio(`./sound/piano-note-${wordPress}.wav`);
        audio.play();
    }
  
       
     
}

