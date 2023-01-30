const reverseFunc = (str) => {
	let result = '';
	for (let i = 0; i < str.length; i = i + 2) {
		if ((i + 1) % 2 === 0) {
			return `${result} || ''`;	
		} else {
			return `${result}${str[i]}`
		}
	}
}

console.log(reverseFunc('sometext'));