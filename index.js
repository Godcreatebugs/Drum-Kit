
// function to work on drum button and adding action using for loop
for(var i=0;i<document.querySelectorAll(".set .drum").length;i++){
    
    var currentState=document.querySelectorAll(".set .drum")[i];
    currentState.addEventListener("click",function(){
      console.log(this);
      //mouse-click /key-board press
      var pressed = this.innerHTML;
      makeSound(pressed);
      addAnimation(pressed);
    })
    
}

// function for button on keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

//make sound function

function makeSound(key){
   
        switch(key){
            case "w":
                 var tom1= new Audio("sounds/tom-1.mp3");
                 tom1.play();
                 break;
             case "a": 
                 var tom2= new Audio("sounds/tom-2.mp3");
                 tom2.play();
                 break;
             case "s": 
                 var tom3= new Audio("sounds/tom-3.mp3");
                 tom3.play();
                 break;
             case "d": 
                 var tom4= new Audio("sounds/tom-4.mp3");
                 tom4.play();
                 break;    
             case "k": 
                 var snare= new Audio("sounds/snare.mp3");
                 snare.play();
                 break;
             case "j": 
                 var kick= new Audio("sounds/kick-bass.mp3");
                 kick.play();
                 break;
             case "l": 
                 var crash= new Audio("sounds/crash.mp3");
                 crash.play();
                 break;             
             default: 
                 alert("Wrong button pressed.")
    }

}

//animation function

function addAnimation(key){
   //tap into current class 
   var currentState = document.querySelector("."+key);

   currentState.classList.add("pressed");
   setTimeout(function(){
    currentState.classList.remove("pressed")
   },100)
}



