// $( document ).ready(function() {

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

// // --------------------------------------------------------------------

	var turn = 1;

    $('#turn').text(turn);
  
	var didSomeoneWin = function () {
		for(var i = 0; i < winningCombos.length; i++) {
			var redCount = 0,
				blueCount = 0;
				

			for(var j = 0; j < winningCombos[i].length; j++) {
				if (winningCombos[i][j].attr('class') === 'blue') {
					blueCount++;
					if(blueCount === 4) {
						alert("Blue player won");
					}
					console.log('blue count', blueCount);
				}
				if (winningCombos[i][j].attr('class') === 'red') {
					redCount++;
					console.log('red count', redCount);
					if (redCount === 4) {
				console.log("Red player won");
			}
				}
			}
			
			
		}
		//grab the enitre board from dom 
		//we need to go through all our winning combinations and see if any of them matched
		// if they do return true
		// if not return false
		// return true
	};

    	$('#columnOne, #columnTwo, #columnThree, #columnFour, #columnFive, #columnSix, #columnSeven').on('click', function() {

    		// only alerts when someone has completley won the game. 
   //     		if (didSomeoneWin() === true) {
   //     			alert ("Youve won!");
   //     		}	
			// else {

		        if (turn == 1) { 
			        for (var i = 5; i >= 0; i--) {
			        	if ($(this).children().eq(i).attr("class") == undefined) {
			        		$(this).children().eq(i).attr("class", "blue"); 
			        		break;
			        	}
			        }

			        //at the end
			        turn = 2;
			        $('#turn').text(turn);

			    } else if(turn == 2) { 
			    	for (var i = 5; i >= 0; i--) {
			    		if($(this).children().eq(i).attr("class") == undefined) {
			    			$(this).children().eq(i).attr("class","red");
			    			break;
			    		}
			    	}
				    
				    turn = 1;
				    $('#turn').text(turn); 
				}  

				// if (didSomeoneWin() == true) {
    //    				alert ("Youve won!");
    //    			}
			// } 
	    });        
// });

























