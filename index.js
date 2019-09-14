init = function(){
  let _interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  })

  _interface.prompt()
  _interface.on('line', str => {
    game.processInput(str)
    _interface.prompt()
  })
  _interface.on('close', () => {
    process.exit(0)
  })
  console.log('\x1b[34m%s\x1b[0m','Welcome to CLI Tools '+  game.version)
} 