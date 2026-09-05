// Immediate Invoked Function Expression (IIFEs)
const gameBoard = (() => {
    // Creates fresh board
    let board = Array(9).fill(' ');
 
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
const Player = (name, marker) => ({ name, marker })

// Game Controller to handle player turns, reset game, win checks
const GameController = (playerOne, playerTwo) => {
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
    let isTie = false;
    let activePlayer = playerOne; // Player one gets first move

    const getActivePlayer = () => activePlayer;

    const switchPlayer = () => {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    }

    const getWinner = () => isWinner === true ? activePlayer : null;

    const getIsTie = () => isTie === true ? true : false;

    const playTurn = (userChoice) => {
        // Set game to active
        isGameActive = true;

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

        // Otherwise, Add marker to selected spot 
        gameBoard.setBoard(userChoice, activePlayer.marker);
        currentMoves++;

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
        
        // Check if TIE
        if (!isWinner && totalMoves === currentMoves) {
            isTie = true;
            // if yes then reset board
            // gameBoard.resetBoard();
        }

        // Switch player if game is still going
        if (isWinner) { return }
        else { switchPlayer(); }
    }

    // Ask if to restart game or end game to end loop
    return {
        playTurn, switchPlayer, getActivePlayer, getWinner, getIsTie
    };
}

// DOM handler
function ScreenController() {
    /* Set up game and the players */
    let game;

    const dialog = document.getElementById('dialog');
    const openBtn = document.getElementById('openModal');

    const form = document.getElementById('player-inputs');
    
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    const cellElements = document.querySelectorAll('.cell-selection');

    // Open modal as a backdrop overlay
    openBtn.addEventListener('click', () => {
        dialog.showModal();
    });

    // Event listener for modal submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const player1Name = document.getElementById('player1-name').value;
        const player2Name = document.getElementById('player2-name').value;

        const markerX = document.getElementById('marker-x');
        const markerO = document.getElementById('marker-o');

        let player1marker = '';
        let player2marker = '';

        // Assign checked marker to player1
        if (markerX.checked) {
            player1marker = markerX.value;
            player2marker = markerO.value;
        } else {
            player1marker = markerO.value;
            player2marker = markerX.value;
        }

        const playerOne = Player(player1Name, player1marker);
        const playerTwo = Player(player2Name, player2marker); 

        game = GameController(playerOne, playerTwo);

        form.reset();
        dialog.close();
        updateScreen();
    });

    const updateScreen = () => {
        // get the newest state of the board and player turn
        const board = gameBoard.getBoard();
        const activePlayer = game.getActivePlayer();
        const winner = game.getWinner();
        const isTie = game.getIsTie();

        // render current board 
        cellElements.forEach((cell, index) => {
            cell.textContent = board[index];
        });

        // Check for winner, if tie game or print next players name
        if (winner) {
            playerTurnDiv.textContent = `Congratulations ${winner.name}, you win!`;
        } else if (isTie) {
            playerTurnDiv.textContent = 'Game is a tie! Cat wins!'
        } else {
            playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;
        } 
    }

    function clickHandlerBoard(event) {
        // If the game hasn't been instantiated yet, stop right there
        if (!game) return;

        // Get the ID string from the clicked slot element
        const selectedSlotID = event.target.id;

        // Prevent slots already taken or empty areas such as background
        if (!selectedSlotID) return;

        // Convert string from id='8' into the number 8 for the array reference
        const slotIndex = Number(selectedSlotID);

        game.playTurn(slotIndex);
        updateScreen();
    }

    boardDiv.addEventListener('click', clickHandlerBoard);

    // Run onces to draw the initial empty board and show who's turn it is
}

ScreenController();


// TODO: User choice is hardcoded in the driver. Next I will create front end to pass in user choice with button clicks
// 1. Create button to start game, maybe add event listener that runs the ScreenController once it's clicked which then allows for the player name button
