function playBack(command) {
	let speakObj = new SpeechSynthesisUtterance(command);
	speakObj.lang = 'en-US';
	speakObj.rate = 0.9;
	speakObj.pitch = 1;
	speakObj.volume = 1;
	window.speechSynthesis.speak(speakObj);
}
const commands = {
	'background': {
		params: 1,
		description: 'Changes the background color of the page.',
		run: (params) => {
			document.body.style.background = params[0]
			playBack(`Background color changed to ${params[0]}`)
		}
	},
	'hello': {
		description: 'Hello',
		run: () => {
			let responses = ['Greetings', 'Hello', 'Hi']
			playBack(responses[Math.floor(Math.random() * responses.length)])
		}
	},
	'help': {
		description:'Describes all commands',
		run: (params) => {
			for(let param of params){
				if(commands.hasOwnProperty(param)){
					if(commands[param].description){
						let description = commands[param].description;
						playBack(description)
					}
					else{
						playBack(`The ${param} command does exist, but it has no description.`)
					}
				}
				else{
					playBack(`The ${param} command does not exist`)
				}
			}
		}
	}
}