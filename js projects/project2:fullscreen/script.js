var element=document.getElementById("image");
function fullscreen(){
    if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();
    }
}