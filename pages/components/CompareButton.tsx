import styles from '../styles/components/CompareButton.module.css'
import { useRouter } from 'next/router'
import { useBooks } from '../../contexts/BooksContext'
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

interface Item {
	item: [BooksDataContextData]
}

export default function CompareButton(props: {
	selectedId: string
	bookSelected: any
}) {
	const router = useRouter()
	const { bookSelect, setBookSelect } = useBooks()
	function handleClick(event: any): void {
		event.preventDefault()
		setBookSelect(props.bookSelected)
		router.push({
			pathname: '/DetailBook',
			query: { id: props.selectedId },
		})
	}
	return (
		<div className={styles.buttonContainer}>
			<button
				onClick={handleClick}
				type='button'
				className={styles.compareButton}
			>
				Compare
			</button>
		</div>
	)
}
