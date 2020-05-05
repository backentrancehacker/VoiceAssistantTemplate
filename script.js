const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
recognition.lang = 'en-US'
recognition.interimResults = false
recognition.maxAlternatives = 5

let graphic = document.getElementById('graphic')
graphic.addEventListener('click', () => {
	recognition.start()
	graphic.style.boxShadow = '0 0 0.5em dodgerblue'
})

recognition.onresult = (event) => {
	graphic.style.boxShadow = '0 0 0.5em silver'
	let input = event.results[0][0].transcript
	document.querySelector('h1').innerHTML = input
	process(input)
}
