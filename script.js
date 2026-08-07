const menu = document.getElementById("menu");
const game = document.getElementById("game");

document.getElementById("startButton").onclick = ()=>{

menu.classList.add("hidden");
game.classList.remove("hidden");

drawLevel();

}

document.getElementById("backButton").onclick=()=>{

game.classList.add("hidden");
menu.classList.remove("hidden");

}

const level=[

["red","blue","green","yellow"],
["yellow","green","blue","red"],
[]

];

function drawLevel(){

const board=document.getElementById("board");

board.innerHTML="";

level.forEach(tube=>{

const div=document.createElement("div");

div.className="tube";

tube.forEach(color=>{

const ball=document.createElement("div");

ball.className="ball";

ball.style.background=color;

div.appendChild(ball);

});

board.appendChild(div);

});

}
