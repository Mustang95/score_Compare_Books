import styles from '../styles/components/CompareButton.module.css'
import { useRouter } from 'next/router'
import { useBooks } from '../../contexts/BooksContext'
import Button from '@material-ui/core/Button'

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
			<Button
				size='large'
				className={styles.compareButton}
				onClick={handleClick}
				variant='contained'
				color='secondary'
			>
				Compare
			</Button>
		</div>
	)
}
