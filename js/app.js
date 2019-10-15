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

// Renders the enemy into the game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class focusing on x and y axis
var Player = function (x, y) {
    
    
    // Variables for the player to move along x and y axis 
    this.x = x;
    this.y = y;
    
    
    //The image of the player of horn-girl is added to the playing field 
     this.player = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {

};
// Renders the image of the user into the game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
// Allows the user to use the arrow keys to jump from tile to tile
Player.prototype.handleInput = function (keyPress) {
    
    
     // Enables user on left arrow key to move left on the x axis by 102
    // Also enables user not to go off the game tiles on the left side
if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };
    
    
    // Enables user on right arrow key to move right on the x axis by 102
    // Also enables user not to go off the game tiles on the right side
    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };
    
    
     // Enables user on up arrow key to move upwards on the y axis by 83
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };
    
    
    
     // Enables user on down arrow key to move downwards on the y axis by 83
    // Also enables user not to go off the game tiles on the bottom side
    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };
    
    
      // Once the user reaches the top of the page; the water, the user is
    // Instantly reset to the starting position
     if (this.y < 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 800);
    };
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];


// Location of the 3 enemies on the y axis located on the stone road
var enemyLocation = [63, 147, 230];


// For each enemy located on the y axis from 0 on the x axis move at a speed of 200 
// Until randomly regenerated in the enemy update function above
enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});


// The starting location of the player is located at x=200, y=405
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


















