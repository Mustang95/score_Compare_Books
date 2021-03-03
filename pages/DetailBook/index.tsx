import styles from '../styles/pages/DetailBook.module.css'
import AppBar from '../components/AppBar'
import { useBooks } from '../../contexts/BooksContext'
import { withRouter, NextRouter } from 'next/router'
import useWindowLocation from '../../hooks/useWindowLocation'
import ImageBook from '../components/ImageBook'
import InfoBook from '../components/InfoBook'

interface WithRouterProps {
	router: NextRouter
}

interface DetailBookProps extends WithRouterProps {}

function DetailBook(props: DetailBookProps) {
	const { location } = useWindowLocation()
	const id = props.router.query.id
		? props.router.query.id
		: location.href.match(/(id=.*)$/g)[0].replace('id=', '')

	const { results } = useBooks()
	const currentBook = results.filter((elem) => elem.objectId === id)[0]
	return (
		<div className={styles.container}>
			<header>
				<AppBar />
			</header>
			<section>
				<ImageBook src={currentBook.cover.url} alt={currentBook.cover.name} />
				<InfoBook info={currentBook} />
			</section>
		</div>
	)
}
export default withRouter(DetailBook)
