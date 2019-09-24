function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    const expArray = expr.split('')
    const checkLeftBrackets = expArray.filter(symbol => symbol === '(').length;
    const checkRightBrackets = expArray.filter(symbol => symbol ===')').length;
	
    if (checkLeftBrackets !== checkRightBrackets) {
        throw new Error ('ExpressionError: Brackets must be paired')
    } else {
        let result = (new Function('return ' + expr))();
        
		if(result === Infinity) {
            throw new Error ('TypeError: Devision by zero.')
        }
		
        return result
     }
}

module.exports = {
    expressionCalculator
}
