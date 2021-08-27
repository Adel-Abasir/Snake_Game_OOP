export class Input {

    constructor(){
        this.inputDirection = { x: 0, y: 0};
        this.lastInputDirection = { x: 0, y: 0};
    }

    updateInputDirection(e) {
        switch (e.key) {
            case 'ArrowUp':
                if(this.lastInputDirection.y == 1 ) break
                this.inputDirection = {x: 0 , y: -1}
                break;
            case 'ArrowRight':
                if(this.lastInputDirection.x == -1 ) break
                this.inputDirection = {x: 1 , y: 0}
                break;
            case 'ArrowLeft':
                if(this.lastInputDirection.x == 1 ) break
                this.inputDirection = {x: -1 , y: 0}
                break;
            case 'ArrowDown':
                if(this.lastInputDirection.y == -1 ) break
                this.inputDirection = {x: 0 , y: 1}
                break;
        }
    }

    getInputDirection() {
        this.lastInputDirection = this.inputDirection;
        return this.inputDirection;
    }
}