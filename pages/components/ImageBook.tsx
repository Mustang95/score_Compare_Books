import styles from '../styles/components/ImageBook.module.css'

export default function ImageBook(props: { src: string; alt: string }) {
	return (
		<div>
			<img
				className={styles.imgContainer}
				alt={props.alt}
				src={props.src}
				title={props.alt}
			/>
		</div>
	)
}
