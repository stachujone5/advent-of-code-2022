import fs from 'fs'

const tasks = fs
	.readFileSync(`./04/input.txt`)
	.toString()
	.split('\n')
	.map(t => t.split(','))

const firstResult = tasks.reduce((acc, curr) => {
	const [minFirst, maxFirst] = curr[0].split('-').map(Number)
	const [minSecond, maxSecond] = curr[1].split('-').map(Number)

	if ((minFirst >= minSecond && maxFirst <= maxSecond) || (minSecond >= minFirst && maxSecond <= maxFirst)) {
		return (acc += 1)
	}

	return acc
}, 0) // 582

const secondResult = tasks.reduce((acc, curr) => {
	const [minFirst, maxFirst] = curr[0].split('-').map(Number)
	const [minSecond, maxSecond] = curr[1].split('-').map(Number)

	if (minFirst >= minSecond && minFirst <= maxSecond) {
		return (acc += 1)
	}
	if (minSecond >= minFirst && minSecond <= maxFirst) {
		return (acc += 1)
	}
	if (maxFirst >= minSecond && maxFirst <= maxSecond) {
		return (acc += 1)
	}
	if (maxSecond >= minFirst && maxSecond <= maxFirst) {
		return (acc += 1)
	}

	return acc
}, 0) // 893

console.log(firstResult, secondResult)
