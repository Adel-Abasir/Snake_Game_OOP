export class Food {

    constructor(randomPostion){
        this.foodPostion = randomPostion;
    }

    updateFoodPostion (randomPostion) {
        this.foodPostion = randomPostion
    }

    draw (gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = this.foodPostion.y;
        foodElement.style.gridColumnStart = this.foodPostion.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }
}