var body = document.querySelector("body");
var corsor = document.querySelector("#corsor");
var h1 = document.querySelector("h1");

body.addEventListener("mousemove",function(dets){

    corsor.style.top = dets.y + "px"
    corsor.style.left = dets.x + "px"
})
h1.addEventListener("mouseenter",function(){
    corsor.style.scale = 2})
   
    h1.addEventListener("mouseleave",function(){
        corsor.style.scale = 1})
