import fs from 'fs'

const input = fs.readFileSync(`./07/input.txt`).toString().split('\n')

const dirFilesArr: { dirName: string; files: string[]; dirs: string[] }[] = []

for (let i = 0; i < input.length; i++) {
	const obj: { dirName: string; files: string[]; dirs: string[] } = { dirName: '', files: [], dirs: [] }

	if (!input[i].includes('cd')) {
		continue
	}

	obj.dirName = input[i].slice(5)

	if (input[i + 1] === '$ ls') {
		const files: string[] = []
		const dirs: string[] = []

		for (let l = i + 2; !input.at(l)?.includes('cd'); l++) {
			const next = input[l]

			if (!next) {
				break
			}

			if (next.includes('dir')) {
				dirs.push(next)
			}

			if (!next.includes('dir')) {
				files.push(next)
			}
		}

		obj.files = files
		obj.dirs = dirs
	}

	dirFilesArr.push(obj)
}

console.log(dirFilesArr)
