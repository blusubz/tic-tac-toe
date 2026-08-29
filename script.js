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
    // Visual Board
    const visualBoard = "0|1|2\n-+-+-\n3|4|5\n-+-+-\n6|7|8\n";
    console.log(visualBoard);

    // Game logic for play

    // Calculate winner

    // Ask if to restart game or end game to end loop
    
})();