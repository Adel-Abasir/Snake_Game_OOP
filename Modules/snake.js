export class Snake {
    
    constructor(snake_speed, gridCenterPostion){
        this.snake_speed = snake_speed;
        this.snakeBody = [gridCenterPostion]
    }

    snakeHead = () => {
        return this.snakeBody[0];
    }

    snakeEatFood = (foodPostion) => {
        return this.snakeBody.some(snakeSegment => {
            return snakeSegment.x == foodPostion.x && snakeSegment.y == foodPostion.y
        })
    }

    snakeIntersection = () => {
        for (let i = 1; i < this.snakeBody.length; i++) {
            const snakeSegment = this.snakeBody[i];
            if (snakeSegment.x == this.snakeHead().x && snakeSegment.y == this.snakeHead().y ) return true;
        }
        return false;
    }

    expandSnake () {
        this.snakeBody.push({...this.snakeBody[length-1]})
    }

    increaseSnakeSpeed () {
        this.snake_speed += 0.1;
    }

    #updateSnakeHeadDirection (inputDirection) {
        this.#updateSnakeDirection();

        this.snakeHead().x += inputDirection.x;
        this.snakeHead().y += inputDirection.y;
    }

    #updateSnakeDirection () {
        for(let i = this.snakeBody.length -2; i >= 0; i--){
            this.snakeBody[i + 1] = {...this.snakeBody[i]};
        }
        
    }

    update (inputDirection) {
        this.#updateSnakeHeadDirection(inputDirection);
    }

    draw (gameBoard) {
        this.snakeBody.forEach( segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake');
            gameBoard.appendChild(snakeElement);
        })
    }
}