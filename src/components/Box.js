import styles from '../css/Box.module.css'
import { useState, useEffect } from 'react'

const Box = ({ img }) => {

	const [on, setOn] = useState(false)

	const onClick = () => {
		setOn(!on)
	}


	return (
		<div className={on ? `${styles.normal} ${styles.on}` : `${styles.normal}`} onClick={onClick}>
			<div className={styles.horse} />
		</div>
	)
}

export default Box