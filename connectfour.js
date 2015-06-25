$( document ).ready(function() {
    console.log("loaded bro")

    var columnA = [($("#a1"), $("#a2"),$("#a3"),$("#a4"),$("#a5"),$("#a6"))];

    var columnB = [$("#b1"), $("#b2"),$("#b3"),$("#b4"),$("#b5"),$("#b6")]

    var columnC = [$("#c1"), $("#c2"),$("#c3"),$("#c4"),$("#c5"),$("#c6")]

    var columnD = [$("#d1"), $("#d2"),$("#d3"),$("#d4"),$("#d5"),$("#d6")]

    var columnE = [$("#e1"), $("#e2"),$("#e3"),$("#e4"),$("#e5"),$("#e6")]

    var columnF = [$("#f1"), $("#f2"),$("#f3"),$("#f4"),$("#f5"),$("#f6")]
// ------------------------------------------------------------------------
    var turn = 1;

    $('#turn').text(turn);

    $('#columnOne, #columnTwo, #columnThree, #columnFour, #columnFive, #columnSix, #columnSeven').on('click', function(){
        
        //check if someone one already -> then can't play anymore - don't do anything

        //place the coin at the bottom most cell of the column
        // for (var i = 0; 0 < $()


        // if ( ($(this).children().eq(5)) {
        	var value = $(this).children().eq(5).text('FUCK YEW') 
        // }	
        
        //and a seperate function

        //then change the turn


        if (turn == 1){
            turn = 2;
            $('#turn').text(turn);
        } else if(turn == 2){
            turn = 1;
            $('#turn').text(turn);
        }
    });
});