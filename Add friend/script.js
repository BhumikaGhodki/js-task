let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click",function(){

    if (flag==0){
        h2.innerHTML = 'friend';
           btn.innerHTML = 'remove';
           flag=1;
    }
    else{
        h2.innerHTML = 'stranger';
        btn.innerHTML = 'add friend';
        flag = 0;
    }

})