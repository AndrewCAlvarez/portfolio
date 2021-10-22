    let r = 100;
    let g = 100;
    let b = 0;
    let forwards = true;
setInterval(() => {
    
    if(r == 255){
        forwards = false;
    }
    if(r == 100){
        forwards = true;
    }
    if(forwards){
        r++;
        g++;
    }else{
        r--;
        g--;
    }
    document.getElementById("home").style.background = 
    `repeating-radial-gradient(circle at 0 0, rgb(${r},0,0), rgb(0, ${g},0) 500px)`;
    console.log(`r: ${r}`)
}, 1);
