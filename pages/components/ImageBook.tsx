import styles from '../styles/components/ImageBook.module.css'

export default function ImageBook(props: { src: string; alt: string }) {
	return (
		<img className={styles.imgContainer} src={props.src} alt={props.alt}></img>
	)
}
