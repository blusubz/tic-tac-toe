# Wooden Tic-Tac-Toe

A responsive, modular Tic-Tac-Toe web application built with vanilla JavaScript, featuring custom player setup and mid-century oak theme. 

[![Live Demo](https://img.shields.io/badge/Live_Demo-🚀-blue?style=for-the-badge)](https://blusubz.github.io/tic-tac-toe/)

## 🎮 Features 
- **Custom Player Setup:** Modal dialog for choosing custom names and initial markers ('X' or 'O').
- **Separation of Concerns:** Games mechanics completely isolated from DOM operations.
- **Responsive Wooden UI:** Built with CSS Grid, CSS Variables, and dynamic font scaling for mobile and desktop screens.
- **Game State Management:** Automatic win detection across 8 winning line combinations and tie detection.

## 🛠️ Architecture & Concepts Learned  
This project was built following **The Odin Project** JavaScript curriculum, focusing on OOP principles 
- **Factory Functions:** Used to generate `Player` object holding name and marker state.
- **Module Pattern (IIFE):** Used for `gameBoard` to encapsulate the board state and prevent global scope pollution.
- **Game Controller:** Handles game state, turn switching and win condition checks w/o touching the DOM.
- **Screen Controller:** Manages all DOM manipulation, click handlers, guard clauses and UI updates.

## 🧰 Built With
- **HTML5** (`<dialog>` modal element)
- **CSS3** (CSS Grid, Flexbox, Custom Properties, `clamp()` responsive typography)
- **JavaScript** (ES6+, IIFEs, Factory Functions, DOM manipulation)

## 💻 Running Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/blusubz/tic-tac-toe.git](https://github.com/blusubz/tic-tac-toe.git)

1. Navigate into the project directory:
    ```bash
    cd tic-tac-toe

2. Open index.html directly in your browser, or launch it with the Live Server extension in VS Code.