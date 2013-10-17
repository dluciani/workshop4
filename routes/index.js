
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
		// remove puzzleBase[RANDOM_NUMBER];
	}

	store.push(randomBase)
  // res.send("it works"+req.session.help)
  // if(req.session.help!="help i need somebody")
  // 		req.session.hel1p="help i need somebody"
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
	  var html ="<ul>";
	  for (var i = 0; i < req.session.puzzleList.length; i++) 
	  {
	  	html+= "<li>" + req.session.puzzleList[i] + "</li>";
	  };
	  res.send(html+"</ul>");
	}

};
