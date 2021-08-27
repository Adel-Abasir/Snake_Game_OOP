export class Grid {
    #GRID_SIZE;

    constructor(){
        this.#GRID_SIZE = 40;
    }


    centerPostion = () => {
        return {
            x: Math.round(this.#GRID_SIZE / 2),
            y: Math.round(this.#GRID_SIZE / 2)
        }
    }
    
    getRandomPostion = () => {
        return {
            x: Math.floor(Math.random() * this.#GRID_SIZE) + 1,
            y: Math.floor(Math.random() * this.#GRID_SIZE) + 1
        }
    }

    outsideGrid = (postion) => {
        return postion.x < 1 || postion.x > this.#GRID_SIZE || postion.y < 1 || postion.y > this.#GRID_SIZE
    }
}