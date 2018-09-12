module.exports = function check(str, bracketsConfig) {
	var openBrackets = [],
		closeBrackets = [],
		stack = []
	for(var i in bracketsConfig)
	{
		openBrackets[openBrackets.length] = bracketsConfig[i][0]
		closeBrackets[closeBrackets.length] = bracketsConfig[i][1]
	}
	for(var symbol of str)
	{
		
		var openIndex =  openBrackets.indexOf(symbol)
		var closeIndex =  closeBrackets.indexOf(symbol)

		if(stack.length > 0) // если мы ожидаем какую-то скобку
		{
			var needleSymbol = stack.pop()
			if(needleSymbol == symbol) //если это ожидаемая скобка, вынимаем из стека и идем дальше
			{
				continue;
			}
			else	//если это не ожидаемая скобка, пушим ее обратно в стек
			{
				stack.push(needleSymbol)
			}
		}
		if(openIndex > -1) //если это новая скобка, добавляем ее в стек
		{
			stack.push(closeBrackets[openIndex])
		}
		else	//если это левый символ, выходим
		{
			return false
		}
	}
	return stack.length == 0;

}

//console.log(check('||',[['|', '|']]))