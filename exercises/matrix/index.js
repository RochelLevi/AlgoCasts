// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let spiral = []
  for (i = 0; i < n; i++){
    spiral.push([])
  }
  let direction = "right"
  let row = 0
  let col = -1

  for (i = 1; i <= n*n; i++){
    switch (direction){
      case "right":
        if (col === n - 1 || spiral[row][col + 1]){
          direction = "down"
          spiral[row + 1][col] = i
          row++
        } else{
          spiral[row][col + 1] = i
          col++
        }
        break;
      case "left":
        if (col === 0 || spiral[row][col - 1]){
          direction = "up"
          spiral[row - 1][col] = i
          row--
        } else{
          spiral[row][col - 1] = i
          col--
        }
        break;
      case "up":
        if (row === 0 || spiral[row - 1][col]){
          direction = "right"
          spiral[row][col + 1] = i
          col++
        } else{
          spiral[row - 1][col] = i
          row--
        }
        break;
      case "down":
        if (row === n - 1 || spiral[row + 1][col]){
          direction = "left"
          spiral[row][col - 1] = i
          col--
        } else{
          spiral[row + 1][col] = i
          row++
        }
        break;
    }
  }
  return spiral
}

module.exports = matrix;
