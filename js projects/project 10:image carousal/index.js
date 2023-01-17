const image=document.getElementById("move");
const images=document.querySelectorAll("img");
start=0;
function move(){
    start++;
    if(start>images.length-1){
        start=0;
    }
    image.style.transform=`translateX(${-start*300}px)`;
}
setInterval(move,500);

// for right side
const image1=document.getElementById("move1");
const images1=document.querySelectorAll("img");
start1=0;
function move1(){
    start1++;
    if(start1>images1.length-1){
        start1=0;
    }
    image1.style.transform=`translateX(${-start1*300}px)`;
}
setInterval(move1,500);

// middle images
const image2=document.getElementById("move2");
const images2=document.querySelectorAll("img");
start2=0;
function move2(){
    start2++;
    if(start2>images2.length-1){
        start2=0;
    }
    image2.style.transform=`translateY(${-start2*470}px)`;
}
setInterval(move2,500);