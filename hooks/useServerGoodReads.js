import { useState, useEffect } from 'react'
import { useBooks } from '../contexts/BooksContext'
import axios from 'axios'

export default function useServerGoodReads() {
	const { bookSelect } = useBooks()
	let [response, setResponse] = useState(null)
	useEffect(() => {
		const getBooks = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url: 'http://localhost:8000',
					params: {
						isbns: bookSelect.isbn,
					},
				})
				setResponse(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		getBooks()
	}, [])
	return { response: response }
}
