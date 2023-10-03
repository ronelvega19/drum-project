


var sounds = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3",
                "sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3",];

var key = ["w","a","s","d","j","k","l"];




for(var i = 0; i < 7; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonKey = this.innerHTML;

        animationPressed(buttonKey);

        playSound(buttonKey);

});

}


       document.addEventListener("keydown", function(){

        
        playSound(event.key);
        animationPressed(event.key);

       });
      
      


function playSound(key){

      
        switch (key) {

                case "w":
                        var sound1 = new Audio(sounds[0]);
                        sound1.play();
                        break;
                case "a":
                        var sound2 = new Audio(sounds[1]);
                        sound2.play();
                        break;
                case "s":
                        var sound3 = new Audio(sounds[2]);
                        sound3.play();
                        break;
        
                case "d":
                        var sound4 = new Audio(sounds[3]);
                        sound4.play();
                        break;
                case "j":
                        var sound5 = new Audio(sounds[4]);
                        sound5.play();
                        break;
                case "k":
                        var sound6 = new Audio(sounds[5]);
                        sound6.play();
                        break;
                case "l":
                        var sound7 = new Audio(sounds[6]);
                        sound7.play();
                        break;
               
                default:
                        break;
               }
}

function animationPressed(currentKey){

      var activated = document.querySelector("."+currentKey);
      activated.classList.add("pressed");
      
      setTimeout(function(){
        activated.classList.remove("pressed");
}, 100);


     

}
