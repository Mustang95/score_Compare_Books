import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useServerJSON() {
	let [responseData, setResponseData] = useState(null)
	useEffect(() => {
		const getBooks = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url: 'http://localhost:8080/results',
				})
				setResponseData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		getBooks()
	}, [])
	return { responseData: responseData }
}
