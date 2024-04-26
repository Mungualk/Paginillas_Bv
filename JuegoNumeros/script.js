const GameDifficulty = [20, 50, 70];

class Game
{
    difficulty;
    cols = 3;
    rows = 3;
    count;  // cols * row....... d:v
    blocks; // Los elementos html con className = "puzzle_block"
    emptyBlockCords = [2,2]; //Las coordenadas del bloque vacío
    indexes = []; // Realiza un seguimiento del orden de los bloques

    constructor(difficultyLevel = 1) 
    {
        this.difficulty = GameDifficulty[difficultyLevel - 1];
        this.count = this.cols * this.rows;
        this.blocks = document.getElementsByClassName("puzzle_block"); //Toma los bloques
        this.init();
    }

    init() //Coloca cada bloque en su posición adecuada.
    {
        for(let y = 0; y < this.rows; y++)
        {
            for(let x = 0; x < this.cols; x++)
            {
               let blockIdx = x + y * this.cols;
               if(blockIdx + 1 >= this.count)
               break;
               let block = this.blocksOnBlock[blockIdx];
               this.positionBlockAtCoord(blockIdx, x, y);
               block.addEventListener('click', (e) => this.onClikOnBlock(blockIdx));
               this.indexes.push(blockIdx);
            }
        }
        this.indexes.push(this.count - 1);
        this.randomize(this.difficulty);
    }

    randomize(iterationCount) // Mueve un bloque aleatorio lol
    {
        for(let i = 0; i < iterationCount; i++)
        {
            let randomBlockIdx = Math.floor(Math.random() * (this.count - 1));
            let moved = this.moveBlock(randomBlockIdx);
            if(!moved)i--;
        }
    }

    moveBlock(blockIdx) // Mueve un bloque y devuelve un booleano verdadero si el bloque se ha movido y viceversa
    {
        let block = this.blocks[blockIdx];
        let blockCoords = this.canMoveBlock(block);
        if(blockCoords != null)
        {
            this.positionBlockAtCoord(blockIdx, this.emptyBlockCords[0], this.emptyBlockCords[1]);
            this.indexes[this.emptyBlockCords[0] + this.emptyBlockCords[1] * this.cols] = this.indexes[blockCoords[0] + blockCoords[1] * this.cols];
            this.emptyBlockCords[0] = blockCoords[0];
            this.emptyBlockCords[1] = blockCoords[1];
            return true;
        }

        return false;
    }

    canMoveBlock(block) //Develve las coordenadas del bloque si puede moverse; de lo contrario, devuelve un valor nullo;
    {
        let blockPos = [parseInt(block.style.left), pase(block.style.top)];
        let blockWidth = block.clientWidth;
        let blockCoords = [blockPos[0] / blockWidth, blockPos[1] / blockWidth];
        let diff = [Math.abs(blockCoords[0] - this.emptyBlockCords[0]), Math.abs(blockCoords[1] - this.emptyBlockCords[1])];
        let canMove = (diff[0] == 1 && diff[1] == 0) || (diff[0] == 0 && diff[1] == 1);
        if(canMove) return blockCoords;
        else return null;
    }
}