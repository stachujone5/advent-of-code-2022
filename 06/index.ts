import fs from 'fs'

const characters = fs.readFileSync(`./06/input.txt`).toString()

const firstMarkersArr: string[] = []

for (let i = 1; i <= characters.length; i++) {
	if (i % 4 === 0) {
		firstMarkersArr.push(characters.slice(i - 4, i))
	}
}

const firstResult = firstMarkersArr.findIndex(marker => {
	const markerLetters = marker.split('')

	const uniqueLetters = new Set(markerLetters)

	return uniqueLetters.size === 4
})

console.log(firstResult * 4 + 3) // 1779

const secondResult: number[] = []

for (let i = 0; i < characters.length; i++) {
	const setOf14 = new Set(characters.slice(i, i + 14))

	if (setOf14.size === 14) {
		secondResult.push(i + 14)
	}
}

console.log(secondResult[0]) // 2635
