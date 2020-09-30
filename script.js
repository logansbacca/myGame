var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");

var p;
var gravity = 0.1

var canJump = true;

var rocks = [];

var rockX = 800;

var score = 0;


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 80;       
        this.ySpeed = 3;
        this.xSpeed = 0;
    }
    show() {
        var img = new Image();
        img.src = 'panda2.png';
        img.width = 2;
        img.height= 4;
        ctx.drawImage(img,this.x,this.y,100,100);
        
    }
    update() {
        
        this.y += this.ySpeed;
        this.ySpeed += gravity;
        
        if (this.y >= 750-80) {
            this.ySpeed = 0;
            canJump = true;
        } else {
            canJump = false;
        }
    }
}

class Rock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 80;
    }
    show() {

        var img = new Image();
        img.src = 'bamboo.png';
        img.width = 2;
        img.height= 4;
        ctx.drawImage(img,this.x,this.y,120,120);
       
    }
    update() {
        if (this.x < p.x + p.w && this.x + this.w > p.x && this.y < p.y + p.h && this.y + this.h > p.y) {
            document.getElementById("gameover-screen").style.display = "block";

        }
    }
}


function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("gameover-screen").style.display = "none";
    start();
    var initInterval = setInterval(update, 10);
}

function tryAgain() {
    location.reload();
}

function start() {
    p = new Player(100, 400);
    
    for (let i = 0; i < 100; i++) {
        var r = new Rock(rockX, 650);
        rocks.push(r);
        rockX += Math.floor(Math.random() * 500) + 300;
    }
    
    p.xSpeed = 4;

    setInterval(changeSpeed, 500);
    setInterval(increaseScore, 500);
}

function update() {
    canvas.width=canvas.width;
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 750, 800, 100);
    p.show();
    p.update();
    for (let i = 0; i < rocks.length; i++) {
        rocks[i].show();
        rocks[i].update();
        rocks[i].x -= p.xSpeed;
    }

    document.getElementById("showScore").innerHTML = "Score: " + score;
}

function changeSpeed() {
    p.xSpeed += 0.1;
}

function increaseScore() {
    score++;
}



function keyDown(e) {
    if (e.keyCode === 32 && canJump) {
        p.ySpeed = -5;
    }
}

document.onkeydown = keyDown;
