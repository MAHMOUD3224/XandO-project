let gridItems = document.getElementsByClassName("square");
let turn = document.querySelector("#instruction");
let resetBtn = document.querySelector("#reset-btn");

let boardX = [];
let boardO = [];
let message = "This square is already taken";
let changeToXOrO = 0;

for (const item of gridItems){
    item.addEventListener("click", function(){
        if(!isNaN(parseInt(item.getAttribute("value")))){
        let value = this.getAttribute("value");
        let index =  value - 1;

        if (changeToXOrO % 2 === 0) {
            boardX.push(item.getAttribute("value"));
            item.children[0].textContent = "x";
            item.setAttribute("value",item.children[0].textContent);
            turn.textContent = `X turn`;
        } else {
            boardO.push(item.getAttribute("value"));
            item.children[0].textContent = "o";
            item.setAttribute("value",item.children[0].textContent);
            turn.textContent = `O turn`;
        }
        changeToXOrO++;                     
        
        checkWinner() ;
        }else[
            alert(message)
        ]
    });
}

resetBtn.onclick = reset ;

function reset(){
    [...gridItems].forEach((item,index) => {
        item.children[0].textContent = "";
        item.setAttribute("value",index + 1);
        item.classList.remove("winner");
    })
    message = "This square is already taken";

    changeToXOrO = 0 ;
    turn.textContent = `X turn`;
    boardX = [];
    boardO = [];

}

// check winner or draw
function checkWinner(){
    const winningCombinations = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"]
    ];
    for(let i of winningCombinations){
        if(isSubset(boardX,i)){
            changeColorWinner(i);
            setTimeout(() => {
                alert("The Winner is X");
            }, 0);
            setTimeout(reset, 3000);
        }else if(isSubset(boardO,i)){
            changeColorWinner(i);
            setTimeout(() => {
                alert("The Winner is O");
            }, 0);
            setTimeout(reset, 3000);
        }
    }
    if (boardX.length + boardO.length === 9) {
        setTimeout(() => {
            alert("It's a draw!");
            setTimeout(reset, 3000);
        }, 0);
    }
    
}
// function to check if player win
function isSubset(playerMoves,combo){
    return combo.every(number => playerMoves.includes(number));
}

function changeColorWinner(combo){
    combo.forEach((num) => {
    let square = document.querySelector(`.square[data-value="${num}"]`);
    square.classList.add("winner");
        [...gridItems].forEach((item,index) => {
        item.setAttribute("value","x");
    })
    message = "reset the game";
    turn.textContent = message;
});
}


    // cons winningCombinations = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [3, 6, 9],
    //     [1, 5, 9],
    //     [3, 5, 7]
    // ];
    // let winner = null;
    // for (const combination of winningCombinations) {
    //     if (boardX.includes(combination[0].toString()) && boardX.includes(combination[1].toString()) && boardX.includes(combination[2].toString())) {
    //         winner = "X";
    //         break;
    //     } else if (boardO.includes(combination[0].toString()) && boardO.includes(combination[1].toString()) && boardO.includes(combination[2].toString())) {
    //         winner = "O";
    //         break;
    //     }
    // }

    // if (winner) {
    //     alert(`The Winner is ${winner}`);
    //     reset();
    // } else if (changeToXOrO === 9) {
    //     alert("It's a draw!");
    //     reset();
    // }