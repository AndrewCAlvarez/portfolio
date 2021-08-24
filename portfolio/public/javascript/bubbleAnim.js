

// let animateBubbleInterval = setInterval(animateBubble, 50);
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


var jsonObj = {
    members: 
           {
            host: "hostName",
            viewers: 
            {
                user1: "value1",
                user2: "value2",
                user3: "value3"
            }
        }
}

var i;

for(i=4; i<=8; i++){
    var newUser = "user" + i;
    var newValue = "value" + i;
    jsonObj.members.viewers[newUser] = newValue ;

}

// console.log(jsonObj);




let bubbleInterval = setInterval(fallAnim, 5);
let windowWidth = window.innerWidth - 25;
let windowHeight = window.innerHeight - 25;
let bubbles = document.getElementsByClassName("home--pic-bubble");


let bubblesJson = {
    bubbles:{}
}
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
