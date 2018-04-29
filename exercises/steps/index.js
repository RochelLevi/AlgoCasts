// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function createStep(i, n){
  output = ''
  for (let j = 1; j <= i; j++){
    output += '#'
  }

  for (let j = i + 1; j <= n; j++){
    output += ' '
  }
  return output
}

function steps(n) {
  for (let i = 1; i <= n; i++){
    output = createStep(i, n)
    console.log(output)
  }
}

module.exports = steps;
