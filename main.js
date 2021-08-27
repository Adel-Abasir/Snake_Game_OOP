import { Grid } from './Modules/grid.js'
import { Snake } from './Modules/snake.js'
import { Food } from './Modules/food.js'
import { Input } from "./Modules/input.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game_board');
const SNAKE_SPEED = 8;

let grid = new Grid();
let snake = new Snake(SNAKE_SPEED, grid.centerPostion());
let food = new Food(grid.getRandomPostion());
let input = new Input();

window.requestAnimationFrame(main);

function main (currentTime) {
    if(gameOver == true ) {
        if(confirm('Game Over, Press Ok to Restart')){
            window.location = '/'
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = ( currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / snake.snake_speed) return;

    lastRenderTime = currentTime;
    window.addEventListener('keydown', e=> {
        input.updateInputDirection(e);
    });
    update();
    draw();
}

function update () {
    snake.update(input.getInputDirection());
    if(snake.snakeEatFood(food.foodPostion)){
        snake.expandSnake();
        snake.increaseSnakeSpeed();
        food.updateFoodPostion(grid.getRandomPostion());
    }
    checkDeath();
}

function draw () {
    gameBoard.innerHTML = '';
    snake.draw(gameBoard);
    food.draw(gameBoard);
}

function checkDeath () {
    gameOver = grid.outsideGrid(snake.snakeHead()) || snake.snakeIntersection();
}