import fs from 'fs'

const backpacks = fs.readFileSync(`./03/input.txt`).toString().split('\n')
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const sharedCompartment = backpacks.map(b => {
	const half = b.length / 2

	const first = b.slice(0, half).split('')
	const second = b.slice(half, b.length).split('')

	const commonLetter = first.find(l => second.includes(l))

	if (!commonLetter) {
		throw new Error('No common letter')
	}

	return commonLetter
})

const firstResult = sharedCompartment.reduce((acc, curr) => {
	const letter = alphabet.findIndex(l => l === curr)

	if (letter === -1) {
		throw new Error('No letter')
	}

	return (acc += letter + 1)
}, 0) // 8109

const groupedBackpacks: string[][] = []

for (let i = 1; i < backpacks.length + 1; i++) {
	if (i % 3 === 0) {
		groupedBackpacks.push(backpacks.slice(i - 3, i))
	}
}

const secondResult = groupedBackpacks.reduce((acc, curr) => {
	const first = curr[0].split('')
	const second = curr[1].split('')
	const third = curr[2].split('')

	const commonLetter = first.find(l => second.includes(l) && third.includes(l))

	if (!commonLetter) {
		throw new Error('No common letters')
	}

	const letter = alphabet.findIndex(l => l === commonLetter)

	if (letter === -1) {
		throw new Error('No letter')
	}

	return (acc += letter + 1)
}, 0) // 2738

console.log(firstResult, secondResult)
