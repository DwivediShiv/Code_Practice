// if(num === 0) return steps
    
//       return  num % 2 === 0 ? numberOfSteps( num / 2, steps + 1) : numberOfSteps( num - 1, steps + 1)
        


var numberOfSteps = function(num) {

	if (num == 0)
		return num;

	return 1 + (num % 2 == 0 ? numberOfSteps(num / 2) : numberOfSteps(num - 1));

    
};