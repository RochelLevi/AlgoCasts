// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let rev = ''
  for (let i = str.length - 1; i >= 0; i--){
    rev += str[i]
  }
  return rev
  // let arr = str.split('')
  // let rev_arr  = arr.reverse()
  // return rev_arr.join('')
}

module.exports = reverse;
