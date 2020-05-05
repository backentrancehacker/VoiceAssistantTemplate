const lex = inp => (inp.split(' ').map(i => i.trim()).filter(i => i.length))
const parse = tokens => {
	let index = 0

	const peek = () => tokens[index]
	const consume = () => tokens[index++]
	const next = () => tokens[index + 1]
	const prev = () => tokens[index - 1]

	const determine = (val) => {
		if(commands.hasOwnProperty(peek())) return 'Command'
		else return 'String'
	}

	const expression = () => {
		switch(determine(peek())){
			case 'Command':
				let command = {
					value: consume(),
					type: 'Command',
					params: []
				}
				while(peek()){	
					if(determine(peek()) == 'Command' && determine(prev()) != 'Command') break;
					command.params.push({
						value: consume(),
						type: 'Param'
					})					
				}
				return command
			default:
				return {
					value: consume(),
					type: 'String'
				}			
		}
	}
	let ref = []
	while(peek()){
		ref.push(expression())
	}
	return ref
}

const transpile = (tree) => {
	for(let part of tree){
		switch(part.type){
			case 'Command':
				let total = []
				for(let param of part.params){
					total.push(param.value)
				}
				try{
					let command = commands[part.value];

					if(total.length < command.params && command.params){
						playBack(`The ${part.value} command needs more parameters.`)
					}
					else{
						command.run(total || null)
					}
				}
				catch(e){
					console.log(e)
				}
				break
			case 'String':
				playBack('Unknown command encountered.')
				return
		}
	}
}
const process = text => {
	transpile(parse(lex(text)))
}