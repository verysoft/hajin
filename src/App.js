import "./App.css"
import Box from './components/Box'
import { useEffect, useState } from 'react'

function App() {

	const [photos, setPhotos] = useState()

	useEffect(() => {
		(async () => {
			const data = await fetch("https://jsonplaceholder.typicode.com/photos")
			const json = await data.json()
			json.splice(100)
			setPhotos(json)
		})()
	}, [])

	return (
		<div className="frame">
			{photos &&
				photos.map((item, index) => {
					return <Box img={item.thumbnailUrl} key={index} />
				})
			}
		</div>
	)
}

export default App
