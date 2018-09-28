module.exports = function check(str, bracketsConfig) {
	let openBrackets = [],
		closeBrackets = [],
		stack = []


	bracketsConfig.forEach((bracket,i,array)=>{
		openBrackets.push(bracket[0])
		closeBrackets.push(bracket[1])
	})

	for(let symbol of str)
	{
		let openIndex =  openBrackets.indexOf(symbol)
		let closeIndex =  closeBrackets.indexOf(symbol)

		if(stack.length > 0) // если мы ожидаем какую-то скобку
		{
			let needleSymbol = stack.pop()
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
		else	//если это некорректный символ, выходим
		{
			return false
		}
	}
	return stack.length == 0;

}

//console.log(check('||',[['|', '|']]))