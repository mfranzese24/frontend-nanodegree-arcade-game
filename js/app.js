
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        if (this.x < 505) {                 //if enemy is on screen, move enemy to the right
      this.x = this.x + 150 * dt;
    }
        else {this.x = this.x - 600}        //else move back to the left of screen to restart
    
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//creating new enemies to appear on screen along with start coordinates
var enemy = new Enemy(-200,60);
var enemy1 = new Enemy(-350,143);
var enemy2 = new Enemy(-50,226);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){

    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 404;

};
Player.prototype.update = function(key) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    //move player left, don't go off screen
    if (this.key === 'left' && this.x > 50) {
        this.x -= 101;
        this.key = 0
    }
    //move player right, don't go off screen
    if (this.key === 'right' && this.x <404) {
        this.x += 101;
        this.key = 0
    }

    //move player up, don't go off screen
    if (this.key === 'up' && this.y > 50) {
        this.y -= 83;
        this.key = 0;
    }

    //move player down, don't go off screen
    if (this.key === 'down' && this.y < 400) {
        this.y += 83;
        this.key = 0;
    }
}

//draws player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//associates handling of player with keypress
Player.prototype.handleInput = function(key) {
    this.key = key;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//create enemy array
var allEnemies = [];
//push all enemies into array
    allEnemies.push(enemy, enemy1, enemy2);

//create new Player 
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
