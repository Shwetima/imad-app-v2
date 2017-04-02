console.log('Loaded!');
//change the text
var element=document.getElementById("main-text");
element.innerHTML='new value';
//move the image
var element = document.getElementById("madi");
var marginLeft;
function moveRight(){
    marginLeft+=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick= function(){
    var interval=setInterval(moveRight,100);
    
};