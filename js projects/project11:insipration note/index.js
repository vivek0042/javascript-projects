const heading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam soluta aliquid illo rem molestias facilis, eveniet maiores temporibus, perspiciatis corrupti voluptates incidunt unde quod vero fugit, repellat velit! Eius.";
const head=document.getElementById("v3");
let start=0;
function headingtext(){
    document.getElementById("v3").innerHTML=heading.slice(0,start);
    start++;
    // console.log("hi");

}
setInterval(headingtext,100);

