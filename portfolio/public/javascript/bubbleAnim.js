let bubbles = document.getElementsByClassName("home--pic-bubble");


// let i = setInterval(animateBubble, 50);
let scale = 1;
let shrinking = false;
function animateBubble(){
    for (let index = 0; index < bubbles.length; index++) {
        const element = bubbles[index];
        if(!shrinking){
            scale += 0.001;
            element.style.transform = "scale(" + scale.toString() + ")";
            if(scale > 2){
                shrinking = true;
            }
        }else{
            scale -= 0.001;
            element.style.transform = "scale(" + scale.toString() + ")";
            if(scale < 1){
                shrinking = false;
            }
        }
    }
}
/* I could use javascript to create the bubble elements one by one 
and then give them thier classes and ids along with generating the 
necessary javascript variables to use the bubble animation on.
 */
let bubble1 = document.getElementById("home--pic-bubble1");

let bubble1Interval = setInterval(orbitAnim, 1);
let windowWidth = window.innerWidth - 25;
let windowHeight = window.innerHeight - 25;
let bubble1Left = Math.floor(Math.random() * windowWidth);
let bubble1Top = 0;
let moveForwards = true;
let isFalling = true;
function orbitAnim(){
    console.log(`bubble1Left: ${bubble1Left}\n Window Width: ${windowWidth}`);

    console.log(bubble1Left == windowWidth);
    if(isFalling){
        bubble1Top++;
        if(bubble1Top == windowHeight){
            clearInterval(bubble1Interval);
        }
    }
    if(moveForwards){
        bubble1Left++;
        if(bubble1Left >= windowWidth){
            moveForwards = false;
        }
    }else{
        bubble1Left--;
        if(bubble1Left == 0){
            moveForwards = true;
        }
    }
    bubble1.style.left = bubble1Left.toString() + 'px';
    bubble1.style.top = bubble1Top.toString() + 'px';


    
}
