let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


/* 
function walk(){
    let gameSound = new Audio("");
    gameSound.play(); 
}

/* ctx.drawImage*/
let arr = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,0,0,0,2,2,0],
    [0,2,2,0,0,0,0,2,2,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [3,3,3,3,0,0,3,3,3,3],
    [3,2,2,3,0,0,3,2,2,3],
    [3,2,2,3,0,0,3,2,2,3],
    [3,3,3,3,0,0,3,3,3,3]
];

console.log(canvas);

let mad = 2;

let bane = 0;

let player = 1;

let playerPosition = {x:0, y:0};

console.log(arr);

function drawMaze(){

// ctx.fillRect(x,y,50,50);

for(let x = 0; x < arr.length; x++){
    
    for(let y = 0; y < arr[x].length; y++){
    
        console.log(arr[x][y])
        if(arr[x][y] == mad){

            console.log("2 er ramt");
            ctx.fillStyle = "grey";
            ctx.fillRect(x*50,y*50,50,50); 
        }
        else if(arr[x][y] == bane){

            console.log("0 er ramt");
            ctx.fillStyle = "brown";
            ctx.fillRect(x*50,y*50,500,500); 
        }
        else if(arr[x][y] == player){

            playerPosition.x = x;
            playerPosition.y = y;
            console.log(playerPosition);
            console.log("1 er ramt");
            ctx.fillStyle = "black";
            ctx.fillRect(x*50,y*50,50,50); 
        }
    }

};

};

document.addEventListener("keyup", function(){

    switch (event.keyCode) {
        case 37:
            if(arr[playerPosition.x -1][playerPosition.y] == bane){
                arr[playerPosition.x -1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
            }
            drawMaze();
        console.log("Du har ramt venstre piletast")
            break;
        case 38:
            if(arr[playerPosition.x][playerPosition.y -1] == bane){
                arr[playerPosition.x][playerPosition.y -1] = player
                arr[playerPosition.x][playerPosition.y] = bane
            }
            drawMaze();
        console.log("Du har ramt øvre piletast")
            break;
        case 39:
            if(arr[playerPosition.x +1][playerPosition.y] == bane){
                arr[playerPosition.x +1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
            }
            drawMaze();
        console.log("Du har ramt højre piletast")
            break;
        
        case 40:
            if(arr[playerPosition.x][playerPosition.y +1] == bane){
                arr[playerPosition.x][playerPosition.y +1] = player
                arr[playerPosition.x][playerPosition.y] = bane
            }
            drawMaze();
        console.log("Du har ramt nedre piletast")
            break; 

        default:
        console.log("Du har ramt en tilfældig piletast")
            break;

    }
});

drawMaze();

function choice(){
    if(playerPosition == arr(index ){
    let gameSound = new Audio("sounds/yo.mp3");
    gameSound.play();}
}
