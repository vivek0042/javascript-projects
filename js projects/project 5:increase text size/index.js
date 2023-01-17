function scrolldt(){
    if(document.body.scrollTo>200|| document.documentElement.scrollTop>200){
        document.getElementById("classcontainer").style.fontSize="300px";
        document.body.style.background="red";
    }
    else{
        document.getElementById("classcontainer").style.fontSize="100px";
        document.body.style.background="green";
    }
}
window.onscroll=function(){
    scrolldt();
}


