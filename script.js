document.addEventListener('DOMContentLoaded',function(){
    const cells = document.querySelectorAll('.cell');
    const status = document.querySelector('.status');
    const restBtn = document.querySelector('.status button');
    const player1 = prompt('Enter Player1 Name:'); //X
    const player2 = prompt('Enter Player2 Name:'); //O
    alert('first turn goes to' +' '+ player1);
    let winMsg = document.createElement('h1');
    let turn = true; 
     
    const checkWinPattern = [
        [0,1,2], [3,4,5], [6,7,8], //horizontal check
        [0,3,6], [1,4,7], [2,5,8], //vertical check
        [0,4,8], [2,4,6],         // diagonal check
    ];

    // changing value to each sell on each click
    function cellClickHandler(){
        if(turn==true){
            this.innerText = 'X';
            this.style.color = "#fcbf49";
            this.style.background = "#f77f00";
            turn = false; 
        }
        else{
            this.innerText = 'O';
            this.style.background = "#ef8354";
            turn = true;
        }
        this.removeEventListener('click', cellClickHandler);
        checkWinner();
    }
    // cellClickHandler is called by each cell
    cells.forEach(cell => {
        cell.addEventListener('click',cellClickHandler);
    });

  // this fuction checks winpatern annd winner
    function checkWinner(){
        for (const winPattern of checkWinPattern) {
            let ps1Val =cells[winPattern[0]].innerText;
            let ps2Val = cells[winPattern[1]].innerText;
            let ps3Val = cells[winPattern[2]].innerText;

            if(ps1Val !== '' && ps1Val === ps2Val && ps1Val === ps3Val  && ps2Val === ps3Val){
                if (ps1Val === "X"){
                    winMsg.innerHTML = player1 + " " + "is the winner (>_<)"
                    console.log ('x win');
                }
                else if (ps1Val === "O"){
                    winMsg.innerHTML = player2 + " " + "is the winner (>_<)"
                    console.log ('0 win');
                }
                else{
                    winMsg.innerHTML = "It's a Tie (O_O)"
                    console.log ('tie');
                }
                status.appendChild(winMsg);
            }
        }
    }

      // rest button code
      restBtn.addEventListener('click',()=>{
        cells.forEach(cell => {
            cell.innerText = '';
            cell.style.background = "#3c6e71";
            winMsg.innerHTML = "";
            turn = true;
            cell.addEventListener('click', cellClickHandler);
        })
    })
   
    
}) //end of DOMCL;
