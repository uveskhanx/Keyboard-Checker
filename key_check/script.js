const keyContainer =  document.getElementById("keyConrtainer")
const allKeys = document.getElementsByClassName("keys")
const normalKeyboard = document.getElementById("normalKeyboard")
const gamingKeyboard = document.getElementById("gamingKeyboard")

// gamingKeyboard.addEventListener('')
document.addEventListener('keydown',function(e){ 
    e.preventDefault()

  // Clone a new audio object each time
  const sound = new Audio("keypress.mp3");
  sound.volume = 1.0; // optional: adjust loudness
  sound.play().catch(err => {
    console.log("Audio play blocked until user interacts", err);
  });

const key = e.code.toLowerCase();  
keyPressed = document.getElementById(key);


  if(keyPressed){
        keyPressed.style.background= "rgb(211, 58, 11)"
        keyPressed.style.boxShadow = "0 0 10px green"
    }
    console.log(e.key)
})

document.addEventListener('keyup', function(e) {
    const key = e.code.toLowerCase()
    const keyPressed = document.getElementById(key)
            keyPressed.style.background= "green"
        keyPressed.style.color = "white"
})
