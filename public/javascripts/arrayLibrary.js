//Our javascript library
var firstClicked;
var secondClicked;
var CurrentArrangement=[];

$(function() 
{
	var x=0;
	$('td').each(function(firstClicked){
		console.log("hello");
		console.log(CurrentArrangement[firstClicked]=$(this).text());
	});

	$('td').bind('click', function (event) 
	{
		console.log("bound");
        if(firstClicked==undefined){
        	firstClicked=$('td.' + $(this).index("td")).text();
        console.log(firstClicked);}
        else if(secondClicked==undefined)
        {
        	secondClicked=$('td.' + $(this).index("td")).text();
        	console.log(secondClicked);
        	var newArray = swap(firstClicked,secondClicked,CurrentArrangement);
        	console.log(newArray);
        	if(check(newArray))
        	{
        		$(this).unbind();
        		alert("yay you did it good for you");
        	}
        	firstClicked=undefined;
        	secondClicked=undefined;
        }


    });	


});




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
	
	return puzzle;
};