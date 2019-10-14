# udacity-Classic-Arcade-Game-Clone-project.

This code is the result I achieved for ***[https://www.udacity.com/](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) - Project 3: Classic Arcade Game Clone***.

This code has been *reviewed by me*. According to me, based on the rubric used
by the Udacity reviewer, this code at least meets specifications on all the
criteria.

The reference that has been of great help to me was the [JavaScript
documentation at the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete).

## Some Extra's

* The enemies at least keep one tile distance of each other
* There will be no more than three enemies on a row at the same time
* For collision detection I've implemented a procedure to have
pixel-precise collision detection. This is based on the alpha channels
in the sprites.

## The Game

The game is a Frogger-clone, where the player starts at the bottom of
the board. The user has to move the player to the top of the board, over
the road into the water, while avoiding enemies crossing the road.
When the player succeeds, or when the player has been hit by one of the
enemies, the game will be reset to the initial state.

You can try the game at the [GitHub Page](http://swesterveld.github.io/udacity-nd001-p3-classic-arcade-game-clone/)

## Languages or Tools used

* HTML & CSS
* HTML5 Canvas
* JavaScript 

### Controls

* The player can be moved with the ***arrow keys***
* The game can be paused (and resumed) with the ***P-key***
* A visual debug mode can be toggled on and off with the ***D-key***

When the game is both on pause and in visual debug mode, the JavaScript
debugger will be activated.

Happy playing! :)
