import "./App.css"
import Box from './components/Box'
import { useEffect, useState } from 'react'
import Dice from "./components/Dice"

function App() {

	const [photos, setPhotos] = useState()

	useEffect(() => {
		/* (async () => {
			const data = await fetch("https://jsonplaceholder.typicode.com/photos")
			const json = await data.json()
			json.splice(100)
			setPhotos(json)
		})() */
	}, [])

	const moveHorse = (n) => {
		
	}

	return (
		<div className="frame">
			<div className="board">
			{
				[...Array(12)].map((item, index) => {
					return <Box key={index} />
				})
			}
			</div>
			<div className="diceBoard">
				<Dice moveHorse={moveHorse} />
			</div>
		</div>
	)
}

export default App
