import Win from "../templates/Win";

const MoveRightLeft = () =>{
        

        const vacuum = document.querySelector('.move');
        const vacuumIn = document.querySelector('.move-in');
        const btnSet = document.querySelector('.btn-vacuum');
        const btnRed = document.querySelector('.circle-red');
        const btnYellowLeft = document.querySelector('.rect-yellow');
        const btnYellowRight = document.querySelector('.rect-yellow-right');
        const btnAquaTop = document.querySelector('.rect-aqua-top');
        const btnAquaBottomOne = document.querySelector('.rect-aqua');
        const btnAquaBottomTwo = document.querySelector('.rect-aqua-bottom');
        const btnBlueleft = document.querySelector('.rect-blue-left');
        const btnBlueRight = document.querySelector('.rect-blue-right');
        const btnAqua = document.querySelector('.rect-aqua-bottom-1');
        const btnBlue = document.querySelector('.rect-blue');
        const textVacuum = document.querySelector('.text-vacuum');

        const trashOne = document.querySelector('.one');
        const trashTwo = document.querySelector('.two');
        const trashThree = document.querySelector('.three');
        const trashFour = document.querySelector('.four');
        const trashFive = document.querySelector('.five');

        const btnPlay = document.querySelector('#btn-control-game');
        const btnReload = document.querySelector('.btn-reload-game');
        
        let right = 50;
        let rightIn = 57;
        let rightC = 77;
        let rightD = 87;
        let rightE = 95;
        let rightF = 104;
        let rightG = 139;
        let rightI = 48;

        const showWin = () =>{
            modal.innerHTML = Win();
            modal.style.display = 'block';
            const btnCloseModal = document.getElementById('btn-close-modal');
            btnCloseModal.addEventListener('click', function(){
                modal.style.display = 'none';
            });
        }

        const reloadGame = () =>{
            location.reload();
        }

        btnReload.addEventListener('click', reloadGame);
        btnPlay.addEventListener('click', playGame());

        function playGame(){
            document.onkeydown = function move (e){
            
                switch(e.keyCode){
                    case 37:
                        right-= 5;
                        rightIn-= 5;
                        rightC-= 5,
                        rightD-= 5,
                        rightE-= 5;
                        rightF-= 5;
                        rightG-= 5;
                        rightI-= 5;
                        
                        
                        break;
                    case 39:
                        right+= 5;
                        rightIn+= 5;
                        rightC+= 5;
                        rightD+= 5;
                        rightE+= 5;
                        rightF+= 5;
                        rightG+= 5;
                        rightI+= 5;
                       
                        break;
    
                }
                vacuum.style.left = right +"px";
                vacuumIn.style.left = rightIn+ "px";
                textVacuum.style.left = rightC + "px";
                btnSet.style.left = rightD + "px";
                btnRed.style.left = rightE + "px";
                btnYellowLeft.style.left = rightD + "px";
                btnYellowRight.style.left = rightF + "px";
                btnAquaTop.style.left = rightD + "px";
                btnAquaBottomOne.style.left = rightD + "px";
                btnAquaBottomTwo.style.left = rightD + "px";
                btnBlueleft.style.left = rightI + "px";
                btnBlueRight.style.left = rightG + "px";
                btnAqua.style.left = rightD + "px";
                btnBlue.style.left = rightD + "px";
                
                
    
                if(right === 135){
                    trashOne.style.display = "none";
                }
                if(right === 220){
                    trashTwo.style.display = "none";
                }
                if(right === 305){
                    trashThree.style.display = "none";
                }
                if(right === 390){
                    trashFour.style.display = "none";
                }
                if(right === 475){
                    trashFive.style.display = "none";
                    showWin();
                }
    
    
    
            }
        }

        
       

        

        

}

export default MoveRightLeft;