// Immediate Invoked Function Expression (IIFEs)
const gameBoard = (() => {
    // Creates fresh board
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
 
    const resetBoard = () =>  { 
        board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
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

// print board to screen 
const printCurrentBoardState = () => {
    // Fetch current state of the board 
    let board = gameBoard.getBoard();
    let row1 = `${board[0]} | ${board[1]} | ${board[2]}`;
    let row2 = `${board[3]} | ${board[4]} | ${board[5]}`;
    let row3 = `${board[6]} | ${board[7]} | ${board[8]}`
    const subRow = '--+---+--';

    // Print current board state
    console.log(row1);
    console.log(subRow);
    console.log(row2);
    console.log(subRow);
    console.log(row3);
}

// Game Controller to handle player turns, reset game, win checks
const gameController = () => {
    const totalMoves = 9;
    let currentMoves = 0;

    // Game logic for play

    // Calculate winner

    // Ask if to restart game or end game to end loop
    
    return;
}

// Game flow Driver
(() => {
    // Start game instructions
    console.log('This is a visual representation of Tic-Tac-Toe board.\n\nPlease select your maker to use it.\n\nInput the digit where you would want to place your marker.')

    // Game Manual
    const visualBoard = "1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9\n";
    console.log(visualBoard);

    // Display 
    // Testing below
    printCurrentBoardState();
    gameBoard.setBoard(0, 'X')
    gameBoard.setBoard(8, 'O')
    printCurrentBoardState()

    // Play game
})();