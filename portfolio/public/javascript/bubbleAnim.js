/* I could use javascript to create the bubble elements one by one 
and then give them thier classes and ids along with generating the 
necessary javascript variables to use the bubble animation on.
 */

let fallSpeed = 3;
let bubbleInterval = setInterval(fallAnim, fallSpeed);
let windowWidth = window.innerWidth - 25;
let windowHeight = window.innerHeight - 25;
let bubbles = document.getElementsByClassName("home--pic-bubble");
let bubblesJson = {
    bubbles:{}
}


function initializeBubbles(){
    for (let i = 0; i < bubbles.length; i++) {
        const element = bubbles[i];
        let newBubble = "bubble" + i;
        let left = Math.floor(Math.random() * windowWidth);
        let top = Math.floor(Math.random() * windowHeight);
        bubblesJson.bubbles[newBubble] = {
            object: element,
            left: left,
            top: top,
            moveForwards: true,
            isFalling: true,
        };
        element.style.left = left + "px";
        element.style.top = top + "px";
    
    }
}



function fallAnim(){
    for (let i = 0; i < bubbles.length; i++) {
        const element = bubblesJson.bubbles["bubble" + i];
        if(element.isFalling){
            element.top++;
            if(element.top == windowHeight){
                element.isFalling = false;
            }
            if(element.moveForwards){
                element.left++;
                if(element.left >= windowWidth){
                    element.moveForwards = false;
                }
            }else{
                element.left--;
                if(element.left == 0){
                    element.moveForwards = true;
                }
            }
        }else if(!element.isFalling){
            element.top--;
            if(element.top == 0){
                element.isFalling = true;
            }
            if(element.moveForwards){
                element.left++;
                if(element.left >= windowWidth){
                    element.moveForwards = false;
                }
            }else{
                element.left--;
                if(element.left == 0){
                    element.moveForwards = true;
                }
            }
        }
        
        element.object.style.left = element.left.toString() + 'px';
        element.object.style.top = element.top.toString() + 'px';
    }
}

initializeBubbles();
