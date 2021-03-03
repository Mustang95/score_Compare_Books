import './styles/global.css'
import BooksDataProvider from '../contexts/BooksContext'

function MyApp({ Component, pageProps }) {
	return (
		<BooksDataProvider>
			<Component {...pageProps} />
		</BooksDataProvider>
	)
}

export default MyApp
