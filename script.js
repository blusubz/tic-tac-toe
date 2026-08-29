// Immedaite Invocked Function Expression (IIFEs)
const gameboard = (() => {
    // Creats fresh board
    let board = ['1','2','3','4','5','6','7','8','9'];
 
    const resetBoard = () =>  { 
        board = ['','','','','','','','',''];
    }
  
    const getBoard = () => board;

    const setBoard = (index, marker) => {
        board[index] = marker;
    }

    return { resetBoard, getBoard, setBoard }
})();

// Player Factory Function
function player(name, marker) {
    let userChoice = "9";
    return {
        name,
        marker,
        userChoice
    };
};

// Game flow Driver
(() => {
    // Start game
    console.log('This is a visual representation of Tic-Tac-Toe board.\n\nPlease select your maker to use it.\n\nInput the digit where you would want to place your marker.')
    // Visual Board
    const visualBoard = "1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9\n";
    console.log(visualBoard);
    console.log(gameboard.getBoard());
    player('morris', 'X');
    console.log(gameboard.getBoard());

    // I can update the visual board on screen which is a screen for every marker selected. Remember to create logic to not allow more than one marker be selected for a certain spot

    // Game logic for play

    // Calculate winner

    // Ask if to restart game or end game to end loop
    
})();