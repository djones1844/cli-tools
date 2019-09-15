const readline = require('readline')
const {RED, GREEN, BLUE} = require('./helpers/color')

// functions called by processInput()

function listOptions(){
  let msg = 
`'q' or 'quit' exit the app
'help' '?' or 'list' display available scripts`

 console.log(BLUE, msg)
}





// think of this as a router
function processInput(str) {
  str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : false

  if(str) {
    str == 'list' || '?' || 'help'
    ? listOptions()
    : str == 'quit' || str == 'q'
    ? process.exit(0)
    : console.log(BLUE, 'No matching script')
  } else {
    console.log(RED, 'Invalid Input')
  }
}

function init(){
  let _interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  })

  _interface.prompt()
  _interface.on('line', str => {
    processInput(str)
    _interface.prompt()
  })
  _interface.on('close', () => {
    process.exit(0)
  })
  console.log(BLUE,'Welcome to CLI Tools ')
} 

init()