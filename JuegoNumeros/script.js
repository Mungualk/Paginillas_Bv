const GameDifficulty = [20, 50, 70];
class Game {
    difficulty;
    cols = 3;
    rows = 3;
    count;
    blocks;
    emptyBlockCoords = [2, 2];
    indexes = [];

    constructor(difficutyLevel = 1) {
        this.difficulty = GameDifficulty[difficultyLevel - 1];
        this.count = this.cols * this.rows;
        this.blocks = document.getElementsByClassName('puzzle_block');
        this.init();
    }
    
    // Coloca cada bloque en su posición adecuada
    init() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let blockIdx = x + y * this.cols;
                if (blockIdx + 1 >= this.count) break;
                let block = this.blocks[blockIdx];
                this.positionBlockAtCoord(blockIdx, x, y);
                block.addEventListener('click', (e) => this.onClickOnBlock(blockIdx));
                this.indexes.push(blockIdx);
            }
        }
        this.indexes.push(this.count - 1);
        this.randomize(this.difficulty);
    }

    // Mover un bloque aleatorio
    randomize(iterationCount) {
        for (let i = 0; i < iterationCount; i++) {
            let randomBlockIdx = Math.floor(Math.random() * (this.count - 1));
            let moved = this.moveBlock(randomBlockIdx);
            if (!moved) i--;
        }
    }
    
    // Mueve un bloque y devuelve un booleano verdadero si el bloque se ha movido y viceversa
    moveBlock(blockIdx) {
        let block = this.blocks[blockIdx];
        let blockCoords = this.canMoveBlock(block);
        if (blockCoords != null) {
            this.positionBlockAtCoord(blockIdx, this.emptyBlockCoords[0], this.emptyBlockCoords[0], this.emptyBlockCoords[1]);
            this.indexes[this.emptyBlockCoords[0] + this.emptyBlockCoords[1] * this.cols] - this.indexes[blockCoords[0] + blockCoords[1] * this.cols];
            this.emptyBlockCoords[0] = blockCoords[0];
            this.emptyBlockCoords[1] = blockCoords[1];
            return true;
        }
        return false;
    }
    
    // Devuelve las coordenadas del bloque si puede moverse; de lo contrario devuelve nulo
    canMoveBlock(block) {
        let blockPos = [parseInt(block.style.left), parseInt(block.style.top)];
        let blockWidth = block.clientWidth;
        let blockCoords = [blockPos[0] / blockWidth, blockPos[1] / blockWidth];
        let diff = [Math.abs(blockCoords[0] - this.emptyBlockCoords[0]), Math.abs(blockCoords[1] - this.emptyBlockCoords[1])];
        let canMove = (diff[0] == 1 && diff[1] == 0) || (diff[0] == 0 && diff[1] == 1);
        if (canMove) return blockCoords;
        else return null;
    }
    
    // Posicionar el bloque en ciertas coordenadas
    positionBlockAtCoord(blockIdx, x, y) {
        let block = this.blocks[blockIdx];
        block.style.left = (x * block.clientWidth) + 'px';
        block.style.top = (y * block.clientWidth) + 'px';
    }
    
    // Intenta mover el bloque y comprueba si el rompecabezas se resolvió
    onClickOnBlock(blockIdx) {
        if (this.moveBlock(blockIdx)) {
            if (this.checkPuzzleSolved()) {
                setTimeout(() => alert('¡Rompecabezas resuelto!'), 600);
            }
        }
    }

    // Verifica si se resolvió el rompecabezas
    checkPuzzleSolved() {
        for (let i = 0; i < this.indexes.length; i++) {
            if (i == this.emptyBlockCoords[0] + this.emptyBlockCoords[1] * this.cols) continue;
            if (this.indexes[i] != i) return false;
        }

        return true;
    }
    
    // Establecer dificultad
    setDifficulty(difficultyLevel) {
        this.difficulty = GameDifficulty[difficultyLevel - 1];
        this.randomize(this.difficulty);
    }
}

let game = new Game(1); // Crear una instancia de un nuevo juego

// Cuidando los botones de dificultad
let difficulty_buttons = Array.from(document.getElementsByClassName('difficulty_button'));
difficulty_buttons.forEach((elem, idx) => {
    elem.addEventListener('click', (e) => {
        difficulty_buttons[GameDifficulty.indexOf(game.difficulty)].classList.remove('active');
        elem.classList.add('active');
        game.setDifficulty(idx + 1);
    });
});