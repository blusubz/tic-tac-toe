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
    let userChoice = "9"; // test choice
    return {
        name,
        marker,
        userChoice
    };
};

// Print current state of board to screen 
const printCurrentBoardState = () => {
    let board = gameBoard.getBoard();
    const formattedBoard = `${board[0]} | ${board[1]} | ${board[2]}\n--+---+--\n${board[3]} | ${board[4]} | ${board[5]}\n--+---+--\n${board[6]} | ${board[7]} | ${board[8]}`

    // Print current board state
    console.log(formattedBoard)
}



// Game Controller to handle player turns, reset game, win checks
const gameController = () => {
    const totalMoves = 9;
    let currentMoves = 0;
    let computerTurnSwtich = 0;
    const winningCoordinates = [
        [0,1,2], // Row 0
        [3,4,5], // Row 1 
        [6,7,8], // Row 2
        [0,3,6], // Row 3 - Col 0
        [1,4,7], // Row 4 - Col 1
        [2,5,8], // Row 5 - Col 2
        [0,4,8], // Row 6 - Diagonal Top right down left
        [2,4,6]  // Row 7 - Diagonal Top left down right
    ];
    const markerX = 'X';
    const markerO = 'O';
    let isWinner = false;
    let board = gameBoard.getBoard();
    // let userChoice = 4;
    

    //userChoice--; // To allow user choice be digits 1-9, so we subtract 1 from user choice to index into board arr correctly 
    
    /* Game logic for play */
    // Create loop to let computer play on it's own
    while (currentMoves < totalMoves && !isWinner) {
        let computerChoice = Math.floor(Math.random() * 9);
        
        const computer1 = 'X';
        const computer2 = 'O';
        // If total moves reached without winner, then Game is tie
        
        // Logic to check if user choice is taken by oppenents marker
        if (board[computerChoice] === ' ') { 
            if (computerTurnSwtich % 2 === 0) {
                console.log('computer 1 turn')
                gameBoard.setBoard(computerChoice, computer1)
            }  else {
                console.log('computer 2 turn')
                gameBoard.setBoard(computerChoice, computer2)
            }
            computerTurnSwtich++;
            currentMoves++;
            printCurrentBoardState();
        } else {
            console.log('Spot taken. Please select another position choice.');
        } 

        // Calculate winner
        for (let i = 0; i < winningCoordinates.length; i++) {
            let A = board[winningCoordinates[i][0]];
            let B = board[winningCoordinates[i][1]];
            let C = board[winningCoordinates[i][2]];

            // 1. Is spot not empty
            // 2. Does Maker A = Marker B = Marker C
            // If yes then game won
            if (A !== ' ' && A === B && B === C) {
                isWinner = true;
                checkWinner(isWinner);
            }
        }
        
        // Check if TIE
        if (!isWinner && totalMoves === currentMoves) {
            checkWinner(isWinner);
                console.log('Would you like to restart the game? y/n')
                // if yes then reset board
                // gameBoard.resetBoard();
        }

        function checkWinner(isWinner) {
            if (isWinner) {
                console.log(`Congratulations! You are the winner!`);
                throw new Error("Game over: stopping execution!");
            } else {
                console.log(`Game was a tie!`);
                throw new Error("Game was a tie: stopping execution!");
            }
        }
    }
    // Ask if to restart game or end game to end loop
}

// Game flow Driver
(() => {
    // Start game instructions
    console.log('This is a visual representation of Tic-Tac-Toe board.\n\nPlease select your marker to use it.\n\nInput the digit where you would want to place your marker.')

    // Game Manual
    const visualBoard = "\n1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9\n\n"; // later do index - 1
    console.log(visualBoard);

    // Play game
    gameController();
})();


