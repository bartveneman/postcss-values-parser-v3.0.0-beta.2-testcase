const {parse} = require('postcss-values-parser')

// Works
console.log(parse(`normal normal 1em/1 'Source Sans Pro', serif`))

// Breaks
parse(`normal normal 1em/1 'Source Sans Pro', serif`).walk(node => {
	console.log(node)
})

// W/o spaces
console.log(parse('1/-1'))
parse('1/-1').nodes.forEach(node => console.log(node))

// With spaces
console.log(parse('1 / -1'))
parse('1 / -1').nodes.forEach(node => console.log(node))