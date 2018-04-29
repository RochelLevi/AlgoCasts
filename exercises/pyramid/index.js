// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const rowSize = n*2 - 1
  for (i = 1; i <= n; i++){
    let numHashtags = i*2 - 1
    let numSpacesEaSide = (rowSize - numHashtags)/2
    let output = ''
    for (j = 1; j <= numSpacesEaSide; j++){
      output += ' '
    }
    for (k = 1; k <= numHashtags; k++){
      output += '#'
    }
    for (l = 1; l <= numSpacesEaSide; l++){
      output += ' '
    }
    console.log(output)
  }
}


module.exports = pyramid;
