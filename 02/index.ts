import fs from 'fs'

const groupedRounds = fs.readFileSync(`./02/input.txt`).toString().split('\n')

const pointsForDifferentSymbols = groupedRounds.reduce((acc, curr) => {
	const [enemy, me] = curr.split(' ')

	if (me === 'X') {
		return (acc += 1)
	}
	if (me === 'Y') {
		return (acc += 2)
	}
	if (me === 'Z') {
		return (acc += 3)
	}

	throw new Error('Invalid symbol')
}, 0) // 5461

const pointsForResults = groupedRounds.reduce((acc, curr) => {
	const [enemy, me] = curr.split(' ')

	if ((enemy === 'A' && me === 'X') || (enemy === 'B' && me === 'Y') || (enemy === 'C' && me === 'Z')) {
		return (acc += 3)
		// draw
	}

	if ((enemy === 'A' && me === 'Y') || (enemy === 'B' && me === 'Z') || (enemy === 'C' && me === 'X')) {
		return (acc += 6)
		// win
	}

	// calculate lose points
	if ((enemy === 'A' && me === 'Z') || (enemy === 'B' && me === 'X') || (enemy === 'C' && me === 'Y')) {
		return (acc += 0)
	}

	throw new Error('Invalid expression')
}, 0) // 7125

const firstResult = pointsForDifferentSymbols + pointsForResults // 12586

const secondResult = groupedRounds.reduce((acc, curr) => {
	const [enemy, roundResult] = curr.split(' ')

	// lose
	if (roundResult === 'X') {
		if (enemy === 'A') {
			return (acc += 3)
		}
		if (enemy === 'B') {
			return (acc += 1)
		}
		if (enemy === 'C') {
			return (acc += 2)
		}
	}
	// draw
	if (roundResult === 'Y') {
		acc += 3

		if (enemy === 'A') {
			return (acc += 1)
		}
		if (enemy === 'B') {
			return (acc += 2)
		}
		if (enemy === 'C') {
			return (acc += 3)
		}
	}
	// win
	if (roundResult === 'Z') {
		acc += 6
		if (enemy === 'A') {
			return (acc += 2)
		}
		if (enemy === 'B') {
			return (acc += 3)
		}
		if (enemy === 'C') {
			return (acc += 1)
		}
	}

	throw new Error('Invalid expression')
}, 0) // 13193

console.log(firstResult, secondResult)
