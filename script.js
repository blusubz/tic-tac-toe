// Immedaite Invocked Function Expression (IIFEs)
const gameboard = (() => {
    // Creats fresh board
    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
 
    const resetBoard = () =>  { 
        board = ['','','','','','','','',''];
    }
  
    const getBoard = () => board;

    const setBoard = (index, mark) => {
        board[index] = mark;
    }

    return { resetBoard, getBoard, setBoard }
})();

// Player Factory Function
function player(name, marker) {
    let userChoice = "";
    return {
        name,
        marker,
        userChoice
    };
};



// Game flow Driver
(() => {
    // Start game

    // Game logic for play

    // Calculate winner

    // Ask if to restart game or end game to end loop
    
})();