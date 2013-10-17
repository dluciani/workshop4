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

  	var html = "<link href=/stylesheets/style.css rel=stylesheet type=text/css>";
  	html +="<table border=1><tr>";
  	for (var i = 0; i < randomBase.length; i++) {

  		 html+= "<td>" + randomBase[i] + "</td>";
	        }

	    html += "</tr></table>";

  	res.send(html)

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
	    for(var i = 0; i < req.session.puzzleList.length; i++){
	        html +="<h3>Puzzle " + (i+1) + "</h3><table border=1><tr>";
	    	var puzzleArray = req.session.puzzleList[i];
	        for (var j = 0; j < puzzleArray.length; j++) 
	        {
	  	        html+= "<td>" + puzzleArray[j] + "</td>";
	        }
	    html += "</tr></table></br>";
	    }
	    res.send(html);
	}

};

var check = function(puzzle){
	var solution = [0,1,2,3,4,5,6,7,8,9,10];
	var correct = true;
	for(var i = 0; i < solution.length; i++){
		if(solution[i] == puzzle[i]){

		}
		else{
			correct = false;
			//NEED TO REDIRECT BACK TO INCORRECT PUZZLE???
		}
	}
	return correct;

};

var swap = function(index1, index2, puzzle){
	
	var temp = puzzle[index1];
	puzzle[index1] = puzzle[index2];
	puzzle[index2] = temp;
};