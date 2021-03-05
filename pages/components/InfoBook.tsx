import styles from '../styles/components/InfoBook.module.css'

export default function InfoBook(props: { info: any; infoGoodReads: any }) {
	const info = props.info
	const infoGR = props.infoGoodReads?.[0]
	return (
		<div className={styles.infoContainer}>
			<div className={styles.headersContainer}>
				<span>{info.name}</span>
				<span>{info.author}</span>
			</div>
			<span>Edição: {info.edition}</span>
			<span>Curador: {info.curator}</span>
			<span>Contêm: {info.pages} páginas</span>
			<div className={styles.footerContainer}>
				<span>TAG avaliações: {info.totalRatings}</span>
				<span>
					GoodReads avaliações:
					{infoGR?.ratings_count ? infoGR?.ratings_count : 'Não encontrado'}
				</span>
			</div>
		</div>
	)
}
