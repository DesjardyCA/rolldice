// input from command line
let numberOfDices = Number(process.argv.slice(2))

// call the dice function as many times as the input gives us
console.log(rollDices(numberOfDices))

// function: rollDices
// input: number of dices rolled
// output: a string of the result
function rollDices(num) {
  let i = 0;
  let output = "Rolled " + num + " dices: ";
  while(i < num) {
    output += rollDice();
    if (i != num - 1) {
      output += ", "
    }
    i++
  }
  return output
}

// function:
// input: none
// output: generated random number
function rollDice() {
  return Math.floor(1 + Math.random() * 6);
}