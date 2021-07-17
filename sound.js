const button = document.querySelectorAll("button"); 
function playSound(instrument){
    let audio,key; 
    switch(instrument){
        case "A" : audio= new Audio("sounds/boom.wav"); 
                    key=button[0]; 
                    break; 
        case "S" : audio = new Audio("sounds/clap.wav"); 
        key=button[1]; 
                    break; 
        case "D" : audio = new Audio("sounds/hihat.wav");
        key=button[2];  
                    break; 
        case "F" : audio = new Audio("sounds/kick.wav"); 
        key=button[3]; 
                    break; 
        case "G" : audio = new Audio("sounds/openhat.wav");
        key=button[4];  
                    break; 
        case "H" : audio = new Audio("sounds/ride.wav"); 
        key=button[5]; 
                    break; 
        case "J" : audio = new Audio("sounds/snare.wav"); 
        key=button[6]; 
                    break; 
        case "K" : audio = new Audio("sounds/tink.wav");
        key=button[7];  
                    break; 
        case "L" : audio = new Audio("sounds/tom.wav"); 
        key=button[8]; 
                    break; 
        default : return; 
    }
    key.classList.toggle("button-class"); 
    audio.play(); 
    setTimeout(function() {
        key.classList.toggle("button-class"); 
    }, 150);
}


button.forEach((x)=>{
    x.addEventListener("click",()=> playSound(x.textContent))
})

window.addEventListener("keypress",(e)=> playSound(e.key.toUpperCase()),false); 
