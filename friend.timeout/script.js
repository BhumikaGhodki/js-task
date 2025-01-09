var button = document.querySelector("button");
var h2 = document.querySelector("h2");

button.addEventListener('click',function(){

    h2.innerHTML='Request sending...'
    h2.style.color = 'red'

    setTimeout(function() {
        h2.innerHTML = 'Friends'
        h2.style.color =' blue'
    }, 3000);
})