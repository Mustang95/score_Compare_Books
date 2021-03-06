import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => ({
	//createStyles({
	menuButton: {
		backgroundImage: `url(${'TAGLivrosLogo.png'})`,
		backgroundSize: 'cover',
		height: '5rem',
		width: '6rem',
		borderRadius: '5px',
	},
	title: {
		flexGrow: 1,
		display: 'none',
		margin: '1rem',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	toolbar: {
		minHeight: 60,
		alignItems: 'center',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2),
	},
}))

export default function AppBarComponent() {
	const classes = useStyles()
	return (
		<header>
			<AppBar position='static' color='default'>
				<Toolbar className={classes.toolbar}>
					<Button href='/' className={classes.menuButton}></Button>
					<Typography className={classes.title} variant='h5' noWrap>
						Livros
					</Typography>
				</Toolbar>
			</AppBar>
		</header>
	)
}
