var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 80;
    }
    show() {
        var img = new Image();
        img.src = 'panda2.png';
        img.width = 2;
        img.height= 4;
    
        img.onload = () => {
            ctx.drawImage(img,this.x,this.y,100,100);
            ctx.moveTo(300,300); 
        }
        
    }

}

var p;

window.onload = function() {
    start();
    update();
}

function start() {
    p = new Player (100,650)
}

function update() {
    canvas.width = canvas.width;
    p.show();
}

