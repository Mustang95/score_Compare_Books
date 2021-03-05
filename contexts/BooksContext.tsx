import React, { createContext, ReactNode, useContext, useState } from 'react'

interface BookResults {
	bookSelect: any
	setBookSelect: any
}
interface BooksDataProviderProps {
	children: ReactNode
}

const BooksDataContext = createContext({} as BookResults)

export default function BooksDataProvider({
	children,
}: BooksDataProviderProps) {
	const [bookSelect, setBookSelect] = useState([])
	return (
		<BooksDataContext.Provider value={{ bookSelect, setBookSelect }}>
			{children}
		</BooksDataContext.Provider>
	)
}

export function useBooks() {
	const context = useContext(BooksDataContext)

	if (!context)
		throw new Error('useBooks must be used within a BooksDataProvider')

	const { bookSelect, setBookSelect } = context
	return { bookSelect, setBookSelect }
}
