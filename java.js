// let boxes=document.querySelectorAll(".box");
// let resetbtn= document.querySelector("#reset");
// let newgamebtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let turno=true;
// //  let arr =[""]
// const winpatterns=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [3,4,5],
//     [6,7,8],
//     [2,4,6]

// ];
// const resetgame =()=>{
//     turno=true;
//     enableboxes();
//     msgContainer.classList.add("hide");
// }
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//  if(turno){
//     box.innerText="O";
//     turno=false;
//     // backgroundColor:green

//  }
//  else{
//     box.innerText="X";
//     turno=true;
//  }
//  box.disabled=true;
//  checkWinner();

//     });

// });
// const disableboxes =() =>{
//     for(let box of boxes){
//         box.disabled=true;
        
//     }

// };
// const enableboxes =() =>{
//     for(let box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }

// };
// const showwinner =(winner)=>{
//     msg.innerText=`Congratulations ,Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableboxes();

// };
// const checkDraw = () => {
//     let isDraw = true;
//     for (let box of boxes) {
//         if (box.innerText === "") {
//             isDraw = false;
//             break;
//         }
//     }
//     return isDraw;
// };

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;
//         if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                 console.log("Winner", pos1Val);
//                 showWinner(pos1Val);
//                 return; // Exit the function if a winner is found
//             }
//         }
//     }
//     if (checkDraw()) {
//         console.log("It's a draw!");
//         showDraw();
//     }
// };

// const showDraw = () => {
//     msg.innerText = "It's a draw!";
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };
// newgamebtn.addEventListener("click",resetgame);a
// resetbtn.addEventListener("click",resetgame);


let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

const resetgame = () => {
    turno = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkDraw = () => {
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    return isDraw;
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                return; // Exit the function if a winner is found
            }
        }
    }
    if (checkDraw()) {
        console.log("It's a draw!");
        showDraw();
    }
};

const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableboxes(); // Disable the boxes when it's a draw
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
