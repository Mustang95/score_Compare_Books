import styles from '../styles/components/BookCase.module.css'
import CompareButton from './CompareButton'
import useServerJSON from '../../hooks/useServerJSON'
interface Cover {
	__type: 'File'
	name: string
	url: string
}
const Month = [
	{ id: 0, month: 'Janeiro' },
	{ id: 1, month: 'Fevereiro' },
	{ id: 2, month: 'Março' },
	{ id: 3, month: 'Abril' },
	{ id: 4, month: 'Maio' },
	{ id: 5, month: 'Junho' },
	{ id: 6, month: 'Julho' },
	{ id: 7, month: 'Agosto' },
	{ id: 8, month: 'Setembro' },
	{ id: 9, month: 'Outubro' },
	{ id: 10, month: 'Novembro' },
	{ id: 11, month: 'Dezembro' },
]
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
	const { responseData } = useServerJSON()

	function orderMonth(currentMonth: string): number {
		for (let months of Month) {
			if (months.month === currentMonth) {
				return months.id
			}
		}
	}

	const bookOrderedByMonth = responseData?.sort((a, b) => {
		let monthA = orderMonth(a.edition.match(/^\S*/g)[0]) //get mes
		let monthB = orderMonth(b.edition.match(/^\S*/g)[0]) //get mes
		return monthA - monthB
	})
	const booksOrderedByYearAndMonth = bookOrderedByMonth?.sort((a, b) => {
		let yearA = parseInt(a.edition.match(/(\d.*)/g)[0]) //get ano
		let yearB = parseInt(b.edition.match(/(\d.*)/g)[0]) //get ano
		return yearA - yearB
	})

	const booksOrderedByYearAndMonthReverse = booksOrderedByYearAndMonth?.reverse()
	//setResponseData(booksOrderedByYearAndMonthReverse)
	return (
		<>
			<div className={styles.listContainer}>
				{booksOrderedByYearAndMonthReverse?.map(
					(books: BooksDataContextData) => (
						<div key={books.objectId}>
							<article
								className={`${styles.article} ${styles.fancy}
            ${styles.fade} ${styles.grow}`}
							>
								<header>
									<img src={books.cover.url} alt='vercel' />
								</header>
							</article>
							<CompareButton selectedId={books.objectId} bookSelected={books} />
						</div>
					)
				)}
			</div>
		</>
	)
}
