const box = document.createElement('div');
box.id = 'box';
const text = document.createTextNode('text is here');
box.appendChild(text);

const home = document.getElementById('home');
// document.body.appendChild(box);

// Let's try to make the home section with javascript
/* <section class="home" id="home">
<div class="home--content" id="home__content">
  <div class="home--content-text">
      <h1>Welcome Web Development</h1>
      <p>If you're expanding your business, building a blog, or representing your brand, I'm here to make it happen.</p>
  </div>
  <div class="home--content-buttons">
    <div>
      <a href="#contact" id="contact--button" class="button button--state-success">Let's Talk</a>
      <a href="./projects.html" class="button">My Work</a>
    </div>
  </div>
</div>
</section> */

const homeSection = document.createElement('section');
const divHomeContent = document.createElement('div');
const divHomeContentText = document.createElement('div');
const divHomeContentTextH1 = document.createElement('h1');
const divHomeContentTextP = document.createElement('p');
const divHomeContentButton = document.createElement('div');
const divHomeContentButtonContact = document.createElement('button');
const divHomeContentButtonButton = document.createElement('button');


homeSection.id = 'home';
homeSection.className = 'home';
divHomeContent.id = 'home__content';
divHomeContent.class = 'home--content';
divHomeContentText.class = 'home--content-text';
divHomeContentText.class = 'home--content-text';

let sections = {
    home: document.getElementById('home'),
    tools: document.getElementById('tools'),
    about: document.getElementById('about'),
    contact: document.getElementById('contact')
}

let currentPage = document.getElementById('home');

function transitionHome(){
    let home = document.getElementById('home');
    transitionAnim(home, currentPage);
}

function transitionTools(){
    let tools = document.getElementById('tools');
    transitionAnim(tools, currentPage);
}

function transitionAbout(){
    let about = document.getElementById('about');
    transitionAnim(about, currentPage);
}

function transitionContact(){
    let contact = document.getElementById('contact');
    transitionAnim(contact, currentPage);
}



function transitionAnim(transitionToElm, transitionFromElm){
    let id = null;
    clearInterval(id);
    let toOpacity = 0;
    let fromOpacity = 1;
    if(transitionToElm == transitionFromElm){
        //do nothing if pages are the same
        clearInterval(id);
    }
    else{
        id = setInterval(transition , 10);
    }
    
    function transition() {
        if(toOpacity >= 1){
            clearInterval(id);
            transitionToElm.style.opacity = 1;
            transitionFromElm.style.opacity = 0;
            currentPage = transitionToElm;
        }
        else{
            toOpacity += 0.1;
            fromOpacity -= 0.1;
            transitionToElm.style.opacity = toOpacity;
            transitionFromElm.style.opacity = fromOpacity;
        }
    }
    
}

