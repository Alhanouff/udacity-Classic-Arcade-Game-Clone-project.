let settings = {
    debug: false,
    pause: false,
    colors: {
        0: "green",  // harmless  (not on player's line)
        1: "orange", // dangerous (on player's line, not colliding)
        2: "red"     // colliding (on player's line and colliding)
    }
};
let colWidth = 101;
let rowHeight = 83;
let tileSize = 83;
let numCols = 5;
let numRows = 6;
let entityWidth = 101;
let entityHeight = 170;

let Enemy = function (x, y, speed) {
this.x = x;
        this.y = y;
        this.speed = speed;
        
        
         this.sprite = 'images/enemy-bug.png';
    };
    Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;

if (this.x > 510) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 222);
    };
    
    
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
    };
};
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Player = function (x, y) {
this.x = x;
    this.y = y;
     this.player = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {

};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
Player.prototype.handleInput = function (keyPress) {
if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };
    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };
    
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };
    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };
     if (this.y < 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 800);
    };
};
var allEnemies = [];
var enemyLocation = [63, 147, 230];

enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});

    var player = new Player(202, 405);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
    
    document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
       
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


















