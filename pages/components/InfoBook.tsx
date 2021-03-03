import styles from '../styles/components/InfoBook.module.css'

export default function InfoBook(props: { info: any }) {
	const info = props.info
	return (
		<div className={styles.infoContainer}>
			<span>{info.name}</span>
			<span>{info.author}</span>
			<span>{info.edition}</span>
			<span>{info.curator}</span>
			<span>{info.pages}</span>
			<span>TAG avaliações: {info.totalRatings}</span>
			<span>GoodReads avaliações: </span>
		</div>
	)
}
