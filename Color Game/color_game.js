var colors = generaterandomcolors(6);
var chosencolor = pickedcolor();
var colordisplay = document.querySelector(".colordisplay");
var squares = document.querySelectorAll(".square");
var header = document.querySelector(".con1");
var ans = document.querySelector(".ans");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var reset = document.querySelector(".reset");
colordisplay.textContent = chosencolor;
for(var x=0;x<6;x++){
    squares[x].style.backgroundColor = colors[x];
    squares[x].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor
        if(clickedcolor === chosencolor){
            header.style.backgroundColor = chosencolor;
            ans.textContent = "Correct";
            reset.textContent = "PLAY AGAIN ?";        
            for(var y=0;y<6;y++){
                squares[y].style.backgroundColor = chosencolor;
            }
        }
        else {
            ans.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}
reset.addEventListener("click",function(){
    colors = generaterandomcolors(6);
    chosencolor = pickedcolor();
    colordisplay.textContent = chosencolor;
    for(var x=0;x<6;x++){
        squares[x].style.backgroundColor = colors[x];
    }
    header.style.backgroundColor = "rgb(49, 109, 223)";
    ans.textContent = "";
    reset.textContent = "NEW COLORS";
});
function pickedcolor() {
    var num = Math.floor(Math.random()*colors.length);
    return colors[num];
}
function generaterandomcolors(number) {
    var arr1 = [];
    for(var x=0;x<number;x++){
        arr1[x] = creatergb();
    }
    return arr1;
}
function creatergb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
});
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
});