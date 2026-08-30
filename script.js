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
// function player(name, marker) {
//     let userChoice = "9"; // test choice
//     return {
//         name,
//         marker,
//         userChoice
//     };
// };

// print board to screen 
// const printCurrentBoardState = () => {
//     // Fetch current state of the board 
//     let board = gameBoard.getBoard();
//     let row1 = `${board[0]} | ${board[1]} | ${board[2]}`;
//     let row2 = `${board[3]} | ${board[4]} | ${board[5]}`;
//     let row3 = `${board[6]} | ${board[7]} | ${board[8]}`
//     const subRow = '--+---+--';

//     // Print current board state
//     console.log(row1);
//     console.log(subRow);
//     console.log(row2);
//     console.log(subRow);
//     console.log(row3);
// }

// Game Controller to handle player turns, reset game, win checks
const gameController = () => {
    const totalMoves = 9;
    let currentMoves = 0;

    
    // Make a move

    // First check the board and see if the index desired is available 
    let userChoice = 1;
    userChoice--; // To allow user choice be digits 1-9, so we subtract 1 from user choice to index into board arr correctly 
    let board = gameBoard.getBoard();

    // Logic to check if user choice is taken by oppenents mark..
    if (board[userChoice] === ' ') {
        gameBoard.setBoard(userChoice, '?')
    } else {
        console.log('Spot taken. Please select another position choice.')
    } 

    // After every move display board 
    console.log(gameBoard.getBoard())

    // Game logic for play

    // Calculate winner

    // Ask if to restart game or end game to end loop
}

// Game flow Driver
(() => {
    // Start game instructions
    console.log('This is a visual representation of Tic-Tac-Toe board.\n\nPlease select your maker to use it.\n\nInput the digit where you would want to place your marker.')

    // Game Manual
    const visualBoard = "\n1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9\n\n"; // later do index - 1
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
