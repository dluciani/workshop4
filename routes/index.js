
/*
 * GET home page.
 */

var store = [];

exports.new = function(req, res)
{
	var puzzleBase = [0,1,2,3,4,5,6,7,8,9,10]
	var randomBase = [];
	//this is where we code random
	for(var i = 0; i < 11; i++){
		// generate a random number
		var RANDOM_NUMBER = parseInt(Math.random()*puzzleBase.length);
		var next = puzzleBase[RANDOM_NUMBER];

		randomBase.push(next);
		puzzleBase.splice(RANDOM_NUMBER, 1);
	}

	store.push(randomBase)
  	req.session.puzzleList=store; 
  	res.send(randomBase)

};

exports.list = function(req, res)
{
	var test=0;
	if(req.session.puzzleList==undefined)
	{
  		//write a re-direct here
  		res.redirect('../new');
  	}
  	else
  	{

  	    var html = "<link href=/stylesheets/style.css rel=stylesheet type=text/css>";
	    for(var j = 0; j < req.session.puzzleList.length; j++){
	        html +="<h3>Puzzle " + j + "</h3><table border=1><tr>";
	    	var puzzleArray = req.session.puzzleList[j];
	        for (var i = 0; i < puzzleArray.length; i++) 
	        {
	  	        html+= "<td>" + puzzleArray[i] + "</td>";
	        }
	    html += "</tr></table></br>";
	    }
	    res.send(html);
	}

};
