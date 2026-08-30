// Immediate Invoked Function Expression (IIFEs)
const gameBoard = (() => {
    // Creates fresh board
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
 
    const resetBoard = () =>  { 
        board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    }
  
    const getBoard = () => board;

    const setBoard = (index, marker) => {
        board[index - 1] = marker;
    }

    return { resetBoard, getBoard, setBoard }
})();

// Player Factory Function
function player(name, marker) {
    let userChoice = "9"; // test choice
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
    let row1 = `${board[1]} | ${board[2]} | ${board[3]}`;
    let row2 = `${board[4]} | ${board[5]} | ${board[6]}`;
    let row3 = `${board[7]} | ${board[8]} | ${board[9]}`
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

    // Logic to check if index is taken..
    // Make a move

    // First check the board and see if the index desired is available 
    let indexSet = 6;
    let boardIndex = gameBoard.getBoard();
    console.log(boardIndex)
    // then check the userChoice vs board index
    if (boardIndex[indexSet] === ' ') {
        gameBoard.setBoard(indexSet, 'X')
    } else {
        console.log('SPOT TAKEN')
    } 

    // if (board[index - 1] !== ' ') {
    //         // board[index - 1] = marker;
    //     } else {
    //         console.log("Spot is already filled. Please try again with a new location.")
    //         gameBoard.setBoard(0, 'X');
    //     }

    // Game logic for play

    // Calculate winner

    // Ask if to restart game or end game to end loop

}

// Game flow Driver
(() => {
    // Start game instructions
    console.log('This is a visual representation of Tic-Tac-Toe board.\n\nPlease select your maker to use it.\n\nInput the digit where you would want to place your marker.')

    // Game Manual
    const visualBoard = "1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9\n"; // later do index - 1
    console.log(visualBoard);

    // Display 
    // Testing below
    // printCurrentBoardState();
    // gameBoard.setBoard(0, 'X')
    // gameBoard.setBoard(8, 'O')
    // printCurrentBoardState()

    // Play game
    gameController();
})();

 // LEFT OFF at Game Controller Logic