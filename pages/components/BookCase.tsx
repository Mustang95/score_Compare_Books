import styles from '../styles/components/BookCase.module.css'
import CompareButton from './CompareButton'
import useServerJSON from '../../hooks/useServerJSON'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
})
export default function BookCase() {
	const classes = useStyles()
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

	return (
		<>
			<div className={styles.listContainer}>
				{booksOrderedByYearAndMonthReverse?.map(
					(books: BooksDataContextData) => (
						<Card
							className={`${styles.article} ${styles.fancy} ${styles.fade} ${styles.grow}`}
							key={books.objectId}
						>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								height='260'
								width='100%'
								image={books.cover.url}
								title='Contemplative Reptile'
							/>
							<CardContent>
								<Typography gutterBottom variant='subtitle1' component='h2'>
									{books.name}
								</Typography>
								<Typography
									variant='subtitle2'
									color='textSecondary'
									component='p'
								>
									{books.author}
								</Typography>
							</CardContent>
							<CardActions>
								<CompareButton
									selectedId={books.objectId}
									bookSelected={books}
								/>
							</CardActions>
						</Card>
					)
				)}
			</div>
		</>
	)
}
