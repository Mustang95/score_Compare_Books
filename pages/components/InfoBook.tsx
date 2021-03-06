import Typography from '@material-ui/core/Typography'
import styles from '../styles/components/InfoBook.module.css'

export default function InfoBook(props: { info: any; infoGoodReads: any }) {
	const info = props.info
	const infoGR = props.infoGoodReads?.[0]
	return (
		<>
			<div className={styles.infoContainer}>
				<div className={styles.headersContainer}>
					<Typography variant='h3' className={styles.title}>
						{info.name}
					</Typography>
					<Typography variant='subtitle1' className={styles.author}>
						{info.author}
					</Typography>
					<div className={styles.infoMiscMarginTop}>
						<Typography variant='body1' className={styles.infoMisc}>
							Edição: {info.edition}
						</Typography>
						<Typography variant='body1' className={styles.infoMisc}>
							Curador: {info.curator}
						</Typography>
						<Typography variant='body1' className={styles.infoMisc}>
							Contêm: {info.pages} páginas
						</Typography>
						<Typography variant='body1' className={styles.infoMisc}>
							TAG avaliações: {info.totalRatings}
						</Typography>
						<Typography variant='body1' className={styles.infoMisc}>
							GoodReads avaliações:
							{infoGR?.ratings_count ? infoGR?.ratings_count : 'Não encontrado'}
						</Typography>
					</div>
				</div>
			</div>
		</>
	)
}
