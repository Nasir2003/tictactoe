
let Currentplayer = "x" 

let Totalturns = 0

let EndGame = false 

function performLogic(buttonid,tileid) { 
    $(buttonid).hide() 
    $(tileid).text(Currentplayer);  
    console.log("hello");
    switchplayer(Currentplayer) 
    updateturns();
}

function switchplayer(player){ 
    console.log(player);
    if(player === "x"){ 
        Currentplayer = "o"; 
         console.log(player);
    } else if(player === "o"){ 
        Currentplayer = "x";
    }
} 

function updateturns(){
    (Totalturns += 1);  
    if(Totalturns === 9){ 
       $("h1").text("It's a draw!") 
       Endgame = true 
    }
    return Totalturns;
}

    


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
