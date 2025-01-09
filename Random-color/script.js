var card = document.querySelector(".card")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    var a1 = Math.floor(Math.random() * 255)
    var a2 = Math.floor(Math.random() * 255)
    var a3 = Math.floor(Math.random() * 255)

    var data = card.style.backgroundColor = `rgb(${a1},${a2},${a3})`
    console.log(data);
    
})