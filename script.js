// Immedaite Invocked Function Expression (IIFEs)
const gameboard = (() => {
    // Creats fresh board
    let board = ['','','','','','','','',''];
 
    const resetBoard = () =>  { 
        board = ['','','','','','','','',''];
    }
  
    const getBoard = () => board;

    const setBoard = (index, mark) => {
        board[index] = mark;
    }

    return { resetBoard, getBoard, setBoard }
})();

// Player constructor
function Player() {
    return 1;
}

// Game flow constructor
function Gameflow() {
    return 1;
}

// Driver code