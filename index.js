
var drumNumber=document.querySelectorAll(".drum").length;
for(var i=0;i<drumNumber;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); /*Query selector selects the button class, adds an event..event to be added, the function to be called.*/
    function handleClick()
    {
        var buttonInnerHTML=this.innerHTML; //takes innerhtml for ex the letter written in html tag.
        switch (buttonInnerHTML) {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                
                break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play(); 
                break;
            case "j":
                var snare=new Audio('sounds/snare.mp3');    
                snare.play();
                break;
            case "k":
                var crash=new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kick_bass =new Audio('sounds/kick-bass.mp3');
                kick_bass.play();
                break;
            default:
                break;
        }
    }
}






