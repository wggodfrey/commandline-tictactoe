const Prompt = require('prompt-input');

const initMatch = () => {
  
  const input = new Prompt({
    name: 'Init',
    message: 'Begin New Game (Y/N)?',
  });

  input.ask(response => {
    console.log(response)
    if (response === 'Y') {
      console.clear();
      initBoard();
    } else if (response === 'N') {
      console.clear();
      console.log('Session Ended');
    } else {
      console.clear();
      console.log(`'${response}' not a valid choice.`);
    }
  });
}

const initBoard = () => {
  let board = [[null, null, null],[null, null, null],[null, null, null]];
  let turn  = 'X';


  const initTurn = () => {

    let col = null;
    let row = null;
    
    
    const initColumnIndex = () => {
      const input1 = new Prompt({
        name: 'cIndex',
        message: 'Place mark in which COLUMN (1-3)?',
      });

      input1.run()
        .then(cIndex => {
          if (parseInt(cIndex) >= 1 && parseInt(cIndex) <= 3) {
            col = cIndex - 1;
            initRowIndex();
          } else {
            console.log(`'${cIndex}' is not a valid column index.`);
            initColumnIndex();
          }
        });
    }

    const initRowIndex = () => {
      const input2 = new Prompt({
        name: 'rIndex',
        message: 'Place mark in which ROW    (1-3)?',
      });

      input2.run()
        .then(rIndex => {
          if (parseInt(rIndex) >= 1 && parseInt(rIndex) <= 3) {
            row = rIndex - 1;
            if (!board[col][row]) {
              takeTurn(col, row);
            } else {
              console.log(`'${col + 1, rIndex}' is already taken.`);
              drawBoard();
            }
          } else {
            console.log(`'${rIndex}' is not a valid row index.`);
            initRowIndex();
          }
        });
    }

    initColumnIndex();

  }

  const takeTurn = (col, row) => {
    board[row][col] = turn;
    turn = turn === 'X'? 'Y': 'X';

    const assessVictory = () => {
      
    }

    drawBoard();
  }


  const drawBoard = () => {
    console.clear();
    console.log(' ===== TIC TAC TOE =====')
    console.log(['==0==','==1==','==2==','==3==','     '].join('|'));
    console.log(['==1==',`  ${board[0][0]? board[0][0]:' '}  `,`  ${board[0][1]? board[0][1]:' '}  `,`  ${board[0][2]? board[0][2]:' '}  `,'     '].join('|'));
    console.log(['==2==',`  ${board[1][0]? board[1][0]:' '}  `,`  ${board[1][1]? board[1][1]:' '}  `,`  ${board[1][2]? board[1][2]:' '}  `,'     '].join('|'));
    console.log(['==3==',`  ${board[2][0]? board[2][0]:' '}  `,`  ${board[2][1]? board[2][1]:' '}  `,`  ${board[2][2]? board[2][2]:' '}  `,'     '].join('|'));
    console.log('');
    console.log('turn: ' + turn);

    initTurn();
  }

  drawBoard();
}







initMatch();
// console.input('Begin New Game')

// 

