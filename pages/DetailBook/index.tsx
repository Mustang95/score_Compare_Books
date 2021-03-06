import styles from '../styles/pages/DetailBook.module.css'
import AppBarComponent from '../components/AppBarComponent'
import { useBooks } from '../../contexts/BooksContext'
import { withRouter, NextRouter } from 'next/router'
import useWindowLocation from '../../hooks/useWindowLocation'
import ImageBook from '../components/ImageBook'
import InfoBook from '../components/InfoBook'
import useServerJSON from '../../hooks/useServerJSON'
import useServerGoodReads from '../../hooks/useServerGoodReads'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
interface WithRouterProps {
	router: NextRouter
}

interface DetailBookProps extends WithRouterProps {}
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rootFirstItem: {
		marginTop: '2rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
	},
}))
function DetailBook(props: DetailBookProps) {
	const classes = useStyles()
	const { location } = useWindowLocation()
	//const { responseData } = useServerJSON()
	const { response } = useServerGoodReads()
	const { bookSelect, setBookSelect } = useBooks()

	const id = props.router.query.id
		? props.router.query.id
		: location.href.match(/(id=.*)$/g)[0].replace('id=', '')

	const currentBook = bookSelect ? bookSelect : undefined //responseData.filter((elem: any) => elem.objectId === id)[0]

	setBookSelect(currentBook)
	return (
		<div className={styles.container}>
			<header>
				<AppBarComponent />
			</header>
			<Grid container spacing={3} className={classes.root}>
				<Grid
					item
					xs={12}
					sm={5}
					xl={5}
					lg={5}
					className={classes.rootFirstItem}
				>
					<ImageBook src={currentBook.cover.url} alt={currentBook.cover.name} />
				</Grid>
				<Grid item xs={12} sm={5} xl={5} lg={5}>
					<InfoBook info={currentBook} infoGoodReads={response?.books} />
				</Grid>
			</Grid>
		</div>
	)
}
export default withRouter(DetailBook)
