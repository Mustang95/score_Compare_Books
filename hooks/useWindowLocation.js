import { useState, useEffect } from 'react'

export default function useWindowLocation() {
	const hasWindow = typeof window !== 'undefined'

	function getWindowLocation() {
		const location = hasWindow ? window.location : null
		return {
			location,
		}
	}

	const [windowLocation, setWindowLocation] = useState(getWindowLocation())

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowLocation(getWindowLocation())
			}
			window.addEventListener('resize', handleResize)
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [hasWindow])

	return windowLocation
}
