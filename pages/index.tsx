import Head from 'next/head'
import AppBar from './components/AppBar'
import styles from '../pages/styles/pages/Home.module.css'
import BookCase from './components/BookCase'
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title> Início | Books</title>
			</Head>
			<AppBar />
			<BookCase />
		</div>
	)
}
