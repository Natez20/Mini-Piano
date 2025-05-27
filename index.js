var numberOfButtons = document.querySelectorAll(".piano").length;

for( i = 0 ; i < numberOfButtons; i++){

    document.querySelectorAll(".piano")[i].addEventListener("click",function(){
     
        var buttonInternalHtml = this.innerHTML.toLowerCase();

        makeSound(buttonInternalHtml);
    });
}

function keyboard(){
   document.addEventListener("keypress", function(event){
    makeSound(event.key);
   });
}

keyboard();


function makeSound(key){
    
    switch (key) {
        case "q": 
            var c6 = new Audio("./sounds/c6.mp3");
            c6.play();
            break;

        case "w": 
            var f6 = new Audio("./sounds/f6.mp3");
            f6.play();
            break;
        
        case "e": 
            var b6 = new Audio("./sounds/b6.mp3");
            b6.play();
            break;
        
        case "r": 
            var g6 = new Audio("./sounds/g6.mp3");
            g6.play();
            break;
        
        case "t": 
            var e6 = new Audio("./sounds/e6.mp3");
            e6.play();
            break;
        
        case "y": 
            var d6 = new Audio("./sounds/d6.mp3");
            d6.play();
            break;
        
        case "u": 
            var a6 = new Audio("./sounds/a6.mp3");
            a6.play();
            break;
        
        case "i": 
            var a_6 = new Audio("./sounds/a36.mp3");
            a_6.play();
            break;
        
        case "o": 
            var g_6 = new Audio("./sounds/g36.mp3");
            g_6.play();
            break;
        
        case "p": 
            var d_6 = new Audio("./sounds/d36.mp3");
            d_6.play();
            break;
    
        default: console.log(key);
            break;
    }
}