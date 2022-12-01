import fs from 'fs'

const groupedCalories = fs
	.readFileSync(`./01/input.txt`)
	.toString()
	.split('\n')
	.join('-')
	.split('--')
	.map(arr => arr.split('-').reduce((acc, curr) => acc + parseInt(curr), 0))

const firstResult = Math.max(...groupedCalories)

const secondResult = groupedCalories
	.sort((a, b) => b - a)
	.slice(0, 3)
	.reduce((acc, curr) => acc + curr, 0)

console.log(firstResult) // 70764
console.log(secondResult) // 203905
