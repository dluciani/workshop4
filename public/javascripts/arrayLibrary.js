//Our javascript library

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