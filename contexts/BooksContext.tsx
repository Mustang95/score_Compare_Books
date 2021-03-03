import React, { createContext, ReactNode, useContext, useState } from 'react'
import Books from '../livros.json'

interface BookResults {
	results: any
}
interface BooksDataProviderProps {
	children: ReactNode
}

const Month = [
	{ id: 0, month: 'Janeiro' },
	{ id: 1, month: 'Fevereiro' },
	{ id: 2, month: 'Março' },
	{ id: 3, month: 'Abril' },
	{ id: 4, month: 'Maio' },
	{ id: 5, month: 'Junho' },
	{ id: 6, month: 'Julho' },
	{ id: 7, month: 'Agosto' },
	{ id: 8, month: 'Setembro' },
	{ id: 9, month: 'Outubro' },
	{ id: 10, month: 'Novembro' },
	{ id: 11, month: 'Dezembro' },
]

const BooksDataContext = createContext({} as BookResults)

export default function BooksDataProvider({
	children,
}: BooksDataProviderProps) {
	const booksDataInitialState = Books

	function orderMonth(currentMonth: string): number {
		for (let months of Month) {
			if (months.month === currentMonth) {
				return months.id
			}
		}
	}

	const bookOrderedByMonth = booksDataInitialState.results.sort((a, b) => {
		let monthA = orderMonth(a.edition.match(/^\S*/g)[0]) //get mes
		let monthB = orderMonth(b.edition.match(/^\S*/g)[0]) //get mes
		return monthA - monthB
	})
	const booksOrderedByYearAndMonth = bookOrderedByMonth.sort((a, b) => {
		let yearA = parseInt(a.edition.match(/(\d.*)/g)[0]) //get ano
		let yearB = parseInt(b.edition.match(/(\d.*)/g)[0]) //get ano
		return yearA - yearB
	})
	const booksOrderedByYearAndMonthReverse = booksOrderedByYearAndMonth.reverse()
	const [results] = useState(booksOrderedByYearAndMonthReverse)
	return (
		<BooksDataContext.Provider value={{ results }}>
			{children}
		</BooksDataContext.Provider>
	)
}

export function useBooks() {
	const context = useContext(BooksDataContext)

	if (!context)
		throw new Error('useBooks must be used within a BooksDataProvider')

	const { results } = context
	return { results }
}
