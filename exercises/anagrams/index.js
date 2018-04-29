// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  objA = {}
  objB = {}
  stringA = stringA.replace(/\W+/g,'').toLowerCase()
  stringB = stringB.replace(/\W+/g,'').toLowerCase()


  if(stringA.length !== stringB.length){
    return false
  }

  stringA.split('').forEach(char =>
    objA[char] = objA[char] + 1 || 1
  )

  stringB.split('').forEach(char =>
    objB[char] = objB[char] + 1 || 1
  )

  for (let char in objA){
    if (objA[char] !== objB[char]){
      return false
    }
  }
  //really need to check length of obj here too
  return true
}

module.exports = anagrams;
