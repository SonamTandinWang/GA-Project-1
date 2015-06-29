// WINNING COMBOS

var a1 = $("#a1"), a2 = $("#a2"), a3 = $("#a3"), a4 = $("#a4"),a5 = $("#a5"),a6 = $("#a6"), b1 = $("#b1"), b2 = $("#b2"),b3 = $("#b3"),b4 = $("#b4"), b5 = $("#b5"), b6 = $("#b6"), c1 = $("#c1"), c2 = $("#c2"), c3 = $("#c3"), c4 = $("#c4"), c5 = $("#c5"), c6 = $("#c6"), d1 = $("#d1"), d2 = $("#d2"), d3 = $("#d3"), d4 = $("#d4"), d5 = $("#d5"), d6 = $("#d6"), e1 = $("#e1"), e2 = $("#e2"), e3 = $("#e3"),e4 = $("#e4"), e5 = $("#e5"), e6 = $("#e6"), f1 = $("#f1"), f2 = $("#f2"), f3 = $("#f3"), f4 = $("#f4"), f5 = $("#f5"), f6 = $("#f6"), g1 = $("#g1"), g2 = $("#g2"), g3 = $("#g3"), g4 = $("#g4"), g5 = $("#g5"), g6 = $("#g6");

var winningCombos = [
	[a1, b1, c1, d1],
	[b1, c1, d1, e1],
	[c1, d1, e1, f1],
	[d1, e1, f1, g1],
	[a2, b2, c2, d2],
	[b2, c2, d2, e2],
	[c2, d2, e2, f2],
	[d2, e2, f2, g2],
	[a3, b3, c3, d3],
	[b3, c3, d3, e3],
	[c3, d3, e3, f3],
	[d3, e3, f3, g3],
	[a4, b4, c4, d4],
	[b4, c4, d4, e4],
	[c4, d4, e4, f4],
	[d4, e4, f4, g4],
	[a5, b5, c5, d5],
	[b5, c5, d5, e5],
	[c5, d5, e5, f5],
	[d5, e5, f5, g5],
	[a6, b6, c6, d6],
	[b6, c6, d6, e6],
	[c6, d6, e6, f6],
	[d6, e6, f6, g6],
	[a1, a2, a3, a4],
	[a2, a3, a4, a5],
	[a3, a4, a5, a6],
	[b1, b2, b3, b4],
	[b2, b3, b4, b5],
	[b3, b4, b5, b6],
	[c1, c2, c3, c4],
	[c2, c3, c4, c5],
	[c3, c4, c5, c6],
	[d1, d2, d3, d4],
	[d2, d3, d4, d5],
	[d3, d4, d5, d6],
	[e1, e2, e3, e4],
	[e2, e3, e4, e5],
	[e3, e4, e5, e6],
	[f1, f2, f3, f4],
	[f2, f3, f4, f5],
	[f3, f4, f5, f6],
	[g1, g2, g3, g4],
	[g2, g3, g4, g5],
	[g3, g4, g5, g6],
	[a1, b2, c3, d4],
	[b1, c2, d3, e4],
	[c1, d2, e3, f4],
	[d1, e2, f3, g4],
	[g1, f2, e3, d4],
	[f1, e2, d3, c4],
	[e1, d2, c3, b4],
	[d1, c2, b3, a4],
	[a2, b3, c4, d5],
	[b2, c3, d4, e5],
	[c2, d3, e4, f5],
	[d2, e3, f4, g5],
	[g2, f3, e4, d5],
	[f2, e3, d4, c5],
	[e2, d3, c4, b5],
	[d2, c3, b4, a5],
	[a3, b4, c5, d6],
	[b3, c4, d5, e6],
	[c3, d4, e5, f6],
	[d3, e4, f5, g6],
	[g3, f4, e5, d6],
	[f3, e4, d5, c6],
	[e3, d4, c5, b6],
	[d3, c4, b5, a6]
];

//----------------------------------------------------------------------------

// WINNER FUNCTION & RESET

var turn = 1;

var didSomeoneWin = function () {
	for(var i = 0; i < winningCombos.length; i++) {
		var player1 = 0,
			player2 = 0;
			
		for(var j = 0; j < winningCombos[i].length; j++) {
			if (winningCombos[i][j].attr('class') === 'player1') {
				player2++;
				if(player2 === 4) {
					miniWinMix.play()
					alert("Player 1 won!");
					alert("Play Again?")
					document.location.reload(true)
				}
			}

			if (winningCombos[i][j].attr('class') === 'player2') {
				player1++;
				console.log('red count', player1);
				if (player1 === 4) {
					miniWinMix.play()
					alert("Player 2 won!");
					alert("Play Again?")
					document.location.reload(true)
				}
			}
		}
		
	}

};

// ---------------------------------------------------------------------------------

// LE GAME 

var player1Click = new Audio('file:///Users/sonamtandinwang/Desktop/GA-Project-1/Sounds/VMH2 Minimal Perc 255.wav');

var player2Click = new Audio('file:///Users/sonamtandinwang/Desktop/GA-Project-1/Sounds/VMH2 Minimal Perc 256.wav');
var miniWinMix = new Audio('file:///Users/sonamtandinwang/Desktop/GA-Project-1/Sounds/MiniWinMix.wav');

// var resetButton = $("#reset");

// (resetButton).on("click", document.location.reload(true));

$('#columnOne, #columnTwo, #columnThree, #columnFour, #columnFive, #columnSix, #columnSeven').on('click', function() {

    if (turn == 1) { 
    	player1Click.play()
        for (var i = 5; i >= 0; i--) {
        	if ($(this).children().eq(i).attr("class") == undefined) {
        		$(this).children().eq(i).attr("class", "player1"); 
        		break;
        	}
        }
        turn = 2;
        $('#turn').text(turn);
        didSomeoneWin()
    } 

    else if(turn == 2) { 
    	player2Click.play()
    	for (var i = 5; i >= 0; i--) {
    		if($(this).children().eq(i).attr("class") == undefined) {
    			$(this).children().eq(i).attr("class","player2");
    			break;
    		}
    	}
	    turn = 1;
	    $('#turn').text(turn); 
	    didSomeoneWin()
	}  
});        