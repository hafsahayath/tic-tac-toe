const boxes = document.querySelectorAll('.box')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const resetBtn = document.getElementById('reset-btn')

let fillerText = "X";

let playerx = 0
let playery = 0

let inputValues = ['!','@','#','$','%','^','&','*','~']

const reset = () => {
    inputValues = ['!','@','#','$','%','^','&','*','~'];
    boxes.forEach(ele=>{
        ele.innerHTML="";
    })
} 

const declareWinner = (id1, id2, id3) => {
    if(fillerText==="X"){
        playerx++
        player1.innerHTML = playerx;
    } else {
        playery++
        player2.innerHTML = playery;
    }
   swal(`${fillerText==="X"?'player 1 won':'player 2 won'}`, {
        button:false,
        timer: 3500
    })
    boxes[id1].style.backgroundColor = '#5cb85c';
    boxes[id2].style.backgroundColor = '#5cb85c';
    boxes[id3].style.backgroundColor = '#5cb85c';

   setTimeout(() => {
        boxes[id1].style.backgroundColor = 'transparent';
        boxes[id2].style.backgroundColor = 'transparent';
        boxes[id3].style.backgroundColor = 'transparent';
        reset()
   }, 3500);
} 

resetBtn.addEventListener('click', ()=>{
    reset();
    player1.innerHTML=0;
    player2.innerHTML=0;
})

const result = () => {
    if(inputValues[0] === inputValues[1] && inputValues[1] === inputValues[2] && inputValues[2] === inputValues[0]){
        declareWinner(0,1,2)
    } else if(inputValues[3] === inputValues[4] && inputValues[4] === inputValues[5] && inputValues[5] === inputValues[3]){
        declareWinner(3,4,5)
    } else if(inputValues[6] === inputValues[7] && inputValues[7] === inputValues[8] && inputValues[8] === inputValues[6]){
        declareWinner(6,7,8)
    } else if(inputValues[0] === inputValues[3] && inputValues[3] === inputValues[6] && inputValues[6] === inputValues[0]){
        declareWinner(0,3,6)
    } else if(inputValues[1] === inputValues[4] && inputValues[4] === inputValues[7] && inputValues[7] === inputValues[1]){
        declareWinner(1,4,7)
    } else if(inputValues[2] === inputValues[5] && inputValues[5] === inputValues[8] && inputValues[8] === inputValues[2]){
        declareWinner(2,5,8)
    } else if(inputValues[0] === inputValues[4] && inputValues[4] === inputValues[8] && inputValues[8] === inputValues[0]){
        declareWinner(0,4,8)
    } else if(inputValues[2] === inputValues[4] && inputValues[4] === inputValues[6] && inputValues[6] === inputValues[2]){
        declareWinner(2,4,6)
    } else {
        const draw = [...new Set(inputValues)].length 
        if(draw === 2){
            swal('draw!!', {
                button:false,
                timer: 1500
            })
        }
    }
}

boxes.forEach((ele,i)=>{
    ele.addEventListener('click', (e)=>{
        if(!ele.innerHTML){
            ele.innerHTML = fillerText;
            inputValues[i] = fillerText;
            result()
            fillerText==="X"? fillerText="O":fillerText="X";
        } else {
            swal("box filled!", {
                button: false,
                timer: 1500
              });
        }

        // console.log(`box ${i} clicked`)
        // console.log(inputValues)
    })
})


