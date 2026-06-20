// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({

behavior:'smooth'

});

});

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},{
threshold:0.15
});

document.querySelectorAll('section').forEach((section)=>{

section.classList.add('hidden');

observer.observe(section);

});

// ==========================
// TYPING EFFECT
// ==========================

const typingText =
document.querySelector(".typing-text");

const words = [

"Cyber Security Student",

"Ethical Hacking Enthusiast",

"Web Security Learner",

"Future Security Professional"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation(){

if(!typingText) return;

const currentWord =
words[wordIndex];

if(!deleting){

typingText.textContent =
currentWord.substring(
0,
charIndex + 1
);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(
typeAnimation,
1500
);

return;

}

}else{

typingText.textContent =
currentWord.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(
typeAnimation,
deleting ? 50 : 100
);

}

typeAnimation();

// ==========================
// CURSOR GLOW EFFECT
// ==========================

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

});

// ==========================
// SPARKLE EFFECT
// ==========================

function createSparkle(){

const sparkle =
document.createElement("div");

sparkle.classList.add("sparkle");

sparkle.style.left =
Math.random() *
window.innerWidth + "px";

sparkle.style.top =
Math.random() *
window.innerHeight + "px";

document.body.appendChild(
sparkle
);

setTimeout(()=>{

sparkle.remove();

},3000);

}

setInterval(
createSparkle,
250
);

// ==========================
// FLOATING FIRE PARTICLES
// ==========================

function createFire(){

const fire =
document.createElement("div");

fire.style.position =
"fixed";

fire.style.width =
"8px";

fire.style.height =
"8px";

fire.style.borderRadius =
"50%";

fire.style.pointerEvents =
"none";

fire.style.left =
Math.random() *
window.innerWidth + "px";

fire.style.bottom =
"-20px";

fire.style.background =
"#38bdf8";

fire.style.boxShadow =
"0 0 15px #38bdf8";

fire.style.zIndex =
"-1";

document.body.appendChild(
fire
);

let pos = 0;

const move = setInterval(()=>{

pos += 3;

fire.style.transform =
`translateY(-${pos}px)`;

fire.style.opacity =
1 - (pos / 700);

if(pos > 700){

clearInterval(move);

fire.remove();

}

},20);

}

setInterval(
createFire,
400
);

// ==========================
// NAVBAR GLOW ON SCROLL
// ==========================

window.addEventListener("scroll",()=>{

const nav =
document.querySelector("nav");

if(window.scrollY > 50){

nav.style.boxShadow =
"0 5px 30px rgba(59,130,246,.35)";

}else{

nav.style.boxShadow =
"none";

}

});

// ==========================
// CARD HOVER 3D EFFECT
// ==========================

document.querySelectorAll(

'.card, .edu-card, .skill, .cert, .project-card'

).forEach(card=>{

card.addEventListener(

'mousemove',

(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
-(y - rect.height/2) / 15;

const rotateY =
(x - rect.width/2) / 15;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener(

'mouseleave',

()=>{

card.style.transform =

"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

// ==========================
// RANDOM LIGHTNING FLASH
// ==========================

function lightning(){

const flash =
document.createElement("div");

flash.style.position =
"fixed";

flash.style.top = 0;
flash.style.left = 0;

flash.style.width =
"100%";

flash.style.height =
"100%";

flash.style.background =
"white";

flash.style.opacity =
"0.12";

flash.style.pointerEvents =
"none";

flash.style.zIndex =
"9998";

document.body.appendChild(
flash
);

setTimeout(()=>{

flash.remove();

},100);

}

setInterval(()=>{

if(Math.random() > 0.75){

lightning();

}

},8000);