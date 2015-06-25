$( document ).ready(function() {

	// var example = [a1 = $("#a1"), a2 = 

 //    var columnA = [$("#a1", $("#a2"),$("#a3"),$("#a4"),$("#a5"),$("#a6")];

 //    var columnB = [$("#b1"), $("#b2"),$("#b3"),$("#b4"),$("#b5"),$("#b6")]

 //    var columnC = [$("#c1"), $("#c2"),$("#c3"),$("#c4"),$("#c5"),$("#c6")]

 //    var columnD = [$("#d1"), $("#d2"),$("#d3"),$("#d4"),$("#d5"),$("#d6")]

 //    var columnE = [$("#e1"), $("#e2"),$("#e3"),$("#e4"),$("#e5"),$("#e6")]

 //    var columnF = [$("#f1"), $("#f2"),$("#f3"),$("#f4"),$("#f5"),$("#f6")]

    // var winningCombos = [
    // 	[]
    // ]

// ------------------------------------------------------------------------------------

	var turn = 1;

    $('#turn').text(turn);
  
	var didSomeoneWin = function () {
		// for (var i = 0; )
		//grab the enitre board from dom 
		//we need to go through all our winning combinations and see if any of them matched
		// if they do return true
		// if not return false
		return true
	}

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
});

























