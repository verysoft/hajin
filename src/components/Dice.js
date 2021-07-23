import React, { useState } from 'react'
import styles from '../css/Dice.module.css'

const Dice = ({ moveHorse }) => {

	const [ran, setRan  ] = useState(0)

	const rollDice = () => {
		const ran = Math.ceil(Math.random() * 6)
		setRan(ran)
		moveHorse(ran)
	}

	return (
		<div className={styles.normal} onClick={rollDice}>
			{
				[...Array(ran)].map((item, index) => <div key={index} className={styles.dot} />)
			}
		</div>
	)
}

export default Dice
