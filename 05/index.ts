import fs from 'fs'

const moves = fs
	.readFileSync(`./05/input.txt`)
	.toString()
	.split('\n')
	.map(m => m.replace('move ', '').replace('from ', '').replace('to ', '').split(' ').map(Number))

const stacks = {
	1: ['Q', 'M', 'G', 'C', 'L'],
	2: ['R', 'D', 'L', 'C', 'T', 'F', 'H', 'G'],
	3: ['V', 'J', 'F', 'N', 'M', 'T', 'W', 'R'],
	4: ['J', 'F', 'D', 'V', 'Q', 'P'],
	5: ['N', 'F', 'M', 'S', 'L', 'B', 'T'],
	6: ['R', 'N', 'V', 'H', 'C', 'D', 'P'],
	7: ['H', 'C', 'T'],
	8: ['G', 'S', 'J', 'V', 'Z', 'N', 'H', 'P'],
	9: ['Z', 'F', 'H', 'G'],
}

const firstResult = () => {
	moves.forEach(m => {
		const count = m[0]
		const from = m[1] as keyof typeof stacks
		const to = m[2] as keyof typeof stacks

		for (let i = 0; i < count; i++) {
			const removed = stacks[from].pop()

			if (!removed) {
				throw new Error('Array is empty!')
			}

			stacks[to].push(removed)
		}
	}) // first result === VCTFTJQCG
}

const secondResult = () => {
	moves.forEach(m => {
		const count = m[0]
		const from = m[1] as keyof typeof stacks
		const to = m[2] as keyof typeof stacks

		const deletedBoxes = stacks[from].splice(-count, count)

		stacks[to].push(...deletedBoxes)
	}) // second result === GCFGLDNJZ
}
