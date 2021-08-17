document.addEventListener("DOMContentLoaded", function(){
    var nut = document.getElementById('nut1');
    var x2 = document.getElementById('move-right');
    var khoi = document.getElementsByClassName('card');
    var hinh = document.getElementsByClassName('n1');
    console.log(nut);
    console.log(x2);
    nut.onclick = function(){
        khoi[0].classList.toggle('move'); //add, remove
        hinh[0].classList.toggle('change'); 
    }
},false);