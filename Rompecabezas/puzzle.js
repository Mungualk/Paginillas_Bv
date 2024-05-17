let rows = 5;
let columns = 5;
let currTile;
let otherTile;
let turns = 0;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement('img');
            tile.src = './images/blank.jpg';

            tile.addEventListener('dragstart', dragStart); // Click en la imagen para arrastrar
            tile.addEventListener('dragover', dragOver); // Arrastra una imagen
            tile.addEventListener('dragenter', dragEnter); // Arrastrando una imagen a otra
            tile.addEventListener('dragleave', dragLeave); // Arrastrando una imagen lejos de otra
            tile.addEventListener('drop', dragDrop); // Soltar una imagen sobre otra
            tile.addEventListener('dragend', dragEnd); // Después de completar dragDrop

            document.getElementById('board').append(tile);
        }
    }

    // Piezas
    let pieces = [];

    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); // Poner del "1" como string a "25" en el arreglo (nombres de las imagenes del rompecabezas)
    }
    
    pieces.reverse();

    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        let tmp = pieces[i];

        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement('img');
        tile.src = './images/' + pieces[i] + '.jpg';

        tile.addEventListener('dragstart', dragStart); // Click en la imagen para arrastrar
        tile.addEventListener('dragover', dragOver); // Arrastra una imagen
        tile.addEventListener('dragenter', dragEnter); // Arrastrando una imagen a otra
        tile.addEventListener('dragleave', dragLeave); // Arrastrando una imagen lejos de otra
        tile.addEventListener('drop', dragDrop); // Soltar una imagen sobre otra
        tile.addEventListener('dragend', dragEnd); // Después de completar dragDrop

        document.getElementById('pieces').append(tile);
    }
}

function dragStart() {
    currTile = this; // Esto se refiere a la imagen en la que se hizo click para arrastrar
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this; // Esto se refiere a la imagen que se está soltando
}

function dragEnd() {
    if (currTile.src.includes('blank')) {
        return;
    }

    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;

    document.getElementById('turns').innerText = turns;
}