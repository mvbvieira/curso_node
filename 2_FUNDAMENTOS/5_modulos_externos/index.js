const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const name = args['nome']

console.log(name)

const idade = args['idade']

console.log(`o nome dele é ${name} e a idade dele é ${idade}`)
