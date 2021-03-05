import React from 'react'
import styles from '../styles/components/AppBar.module.css'

export default function AppBar() {
	return (
		<header>
			<div className={styles.header}>
				<a href='/'>Logo</a>
				<div className={styles.headerCenter}></div>
				<div className={styles.headerRight}></div>
			</div>
		</header>
	)
}
