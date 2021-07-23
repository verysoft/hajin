import styles from '../css/Box.module.css'
import { useState, useEffect } from 'react'

const Box = ({ img }) => {

	const [on, setOn] = useState(false)

	const onClick = () => {
		setOn(!on)
	}

	useEffect(() => {
		if (on) {
			setTimeout(() => {
				setOn(false)
			}, 1000)
		}
	}, [on])

	return (
		<div className={on ? `${styles.normal} ${styles.on}` : `${styles.normal}`} onMouseOver={onClick}>
			<img className={styles.img} src={img} alt="" />
		</div>
	)
}

export default Box