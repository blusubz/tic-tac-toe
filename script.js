// Immediate Invoked Function Expression (IIFEs)
const gameBoard = (() => {
    // Creates fresh board
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
 
    const resetBoard = () =>  { 
        board.fill(' ');
    }
  
    const getBoard = () => board;

    const setBoard = (index, marker) => {
        board[index] = marker;
    }

    return { resetBoard, getBoard, setBoard }
})();

// Player Factory Function
const player = (name, marker) => ({ name, marker })

// Print current state of board to screen 
const printCurrentBoardState = () => {
    let board = gameBoard.getBoard();
    const formattedBoard = `${board[0]} | ${board[1]} | ${board[2]}\n--+---+--\n${board[3]} | ${board[4]} | ${board[5]}\n--+---+--\n${board[6]} | ${board[7]} | ${board[8]}`;

    // Print current board state
    console.log(formattedBoard);
}

// Game Controller to handle player turns, reset game, win checks
const gameController = (playerOne, playerTwo) => {
    const totalMoves = 9;
    let currentMoves = 0;
    const board = gameBoard.getBoard();
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
    let isWinner = false;
    let activePlayer = playerOne; // Player one gets first move

    const switchPlayer = () => {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    }

    const playTurn = (userChoice) => {
        userChoice--; // To keep digits as 1-9 for user choice
        /* If game is over, stop game */ 
        if (isWinner || totalMoves === currentMoves) {
            console.log("Game is over. Restart game to play again.");
            return;
        }
        
        // Logic to check if user choice spot not empty
        if (board[userChoice] !== ' ') { 
            console.log('Spot taken. Please select another position choice.');
            return;
        } 
        gameBoard.setBoard(userChoice, activePlayer.marker);
        currentMoves++;
        printCurrentBoardState();

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
                break;
            }
        }

        // Annouce player winner
        if (isWinner) {
            console.log(`Congratulations ${activePlayer.name}! You win!`);
            return;
        }
        
        // Check if TIE
        if (!isWinner && totalMoves === currentMoves) {
            console.log('Game was a Tie!');
            return;
            // if yes then reset board
            // gameBoard.resetBoard();
        }

        // Switch player if game is still going
        switchPlayer(activePlayer);
    }


    // Ask if to restart game or end game to end loop
    return {
        playTurn, switchPlayer
    };
}

const gameInstructions = () => {
    // Start game instructions
    console.log('This is a visual representation of Tic-Tac-Toe board.\n\nPlease select your marker to use it.\n\nInput the digit where you would want to place your marker.')

    // Game Manual
    const visualBoard = "\n1|2|3\n-+-+-\n4|5|6\n-+-+-\n7|8|9\n\n"; // later do index - 1
    console.log(visualBoard);
}

// Game flow Driver
// (() => {

// })();



// DOM hanlder
function ScreenController() {

    // Game start w/ Instructions in terminal
    gameInstructions();

    /* Set up game and the players */
    const playerOne = player('Morris', 'X');
    const playerTwo = player('Computer', 'O');
    const game = gameController(playerOne, playerTwo);

    /* Play game */
    game.playTurn(2);
    game.playTurn(3);
    game.playTurn(7);
    game.playTurn(1);
    game.playTurn(2);
    game.playTurn(9);
    game.playTurn(8);
    game.playTurn(6);
    game.playTurn(4);
    game.playTurn(5);

    function clickHandlerBoard(event) {
        return;
    }
}

ScreenController();


// TODO: User choice is hardcoded in the driver. Next I will create front end to pass in user choice with button clicks
