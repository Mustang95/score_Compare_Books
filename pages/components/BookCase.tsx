import styles from '../styles/components/BookCase.module.css'
import { useBooks } from '../../contexts/BooksContext'
import CompareButton from './CompareButton'
interface Cover {
	__type: 'File'
	name: string
	url: string
}

interface BooksDataContextData {
	objectId: string
	pages: number
	createdAt: Date
	updatedAt: Date
	author: string
	name: string
	isbn: number
	curator: string
	cover: Cover
	edition: string
	active?: boolean
	blocked: boolean
	numRatings: number
	totalRatings: number
}

export default function BookCase() {
	const { results } = useBooks()
	return (
		<>
			<div className={styles.listContainer}>
				{results.map((books: BooksDataContextData) => (
					<div key={books.objectId}>
						<article
							className={`${styles.article} ${styles.fancy}
            ${styles.fade} ${styles.grow}`}
						>
							<header>
								<img src={books.cover.url} alt='vercel' />
							</header>
						</article>
						<CompareButton selected={books.objectId} />
					</div>
				))}
			</div>
		</>
	)
}
