import styles from '../styles/pages/DetailBook.module.css'
import AppBar from '../components/AppBar'
import { useBooks } from '../../contexts/BooksContext'
import { withRouter, NextRouter } from 'next/router'
import useWindowLocation from '../../hooks/useWindowLocation'
import ImageBook from '../components/ImageBook'
import InfoBook from '../components/InfoBook'
import useServerJSON from '../../hooks/useServerJSON'
import useServerGoodReads from '../../hooks/useServerGoodReads'
import axios from 'axios'
import { useState, useEffect } from 'react'

interface WithRouterProps {
	router: NextRouter
}

interface DetailBookProps extends WithRouterProps {}

function DetailBook(props: DetailBookProps) {
	const { location } = useWindowLocation()
	//const { responseData } = useServerJSON()
	const { response } = useServerGoodReads()
	const { bookSelect, setBookSelect } = useBooks()

	const id = props.router.query.id
		? props.router.query.id
		: location.href.match(/(id=.*)$/g)[0].replace('id=', '')

	const currentBook = bookSelect ? bookSelect : undefined //responseData.filter((elem: any) => elem.objectId === id)[0]

	setBookSelect(currentBook)
	return (
		<div className={styles.container}>
			<header>
				<AppBar />
			</header>
			<section>
				<ImageBook src={currentBook.cover.url} alt={currentBook.cover.name} />
				<InfoBook info={currentBook} infoGoodReads={response?.books} />
			</section>
		</div>
	)
}
export default withRouter(DetailBook)
