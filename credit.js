function createCredit(git, twit){
	let icons = document.createElement('div')
	Object.assign(icons.style, {
		position: 'fixed',
		bottom: '0.5em',
		right: '0.5em',
		display: 'flex',
		flexDirection: 'row',
		zIndex: 10
	})
	let subIcons = [
		document.createElement('div'),
		document.createElement('div')
	]
	for(let icon of subIcons){
		Object.assign(icon.style, {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			background: '#fff',
			boxShadow: '0 0 0.5em silver',
			margin: '0.5em',
			width: '2em',
			height: '2em',
			fontSize: '1.4em',
			borderRadius: '50%',
			cursor: 'pointer',
			transition: 'box-shadow 0.3s ease'
		})
		let a = document.createElement('a')
		Object.assign(a.style, {
			color: 'black',
			textDecoration: 'none'
		})
		icon.appendChild(a)
		icon.onmouseover = () => {
			icon.style.boxShadow = '0 0 0.5em dodgerblue'
		}
		icon.onmouseleave = () => {
			icon.style.boxShadow = '0 0 0.5em silver'			
		}
		icons.appendChild(icon)
	}

	subIcons[0].querySelector('a').innerHTML = '<i class="fas fa-code-branch"></i>'
	subIcons[0].querySelector('a').href = `https://github.com/${git}`

	subIcons[1].querySelector('a').innerHTML = '<i class="fab fa-twitter"></i>' 
	subIcons[1].querySelector('a').href = `https://twitter.com/${twit}`
	document.body.appendChild(icons)
}
createCredit('nathan-pham/VoiceAssistantTemplate', 'npham23')
