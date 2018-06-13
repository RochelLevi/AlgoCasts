// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root){
    return []
  }

  let queue = [root]
  let widthArr = [1]
  let numChildren = root.children.length

  while(numChildren){
    for(let i = 0; i < widthArr[widthArr.length - 1]; i++){
      let last = queue.pop()
      last.children.forEach(child => queue.unshift(child))
    }
    numChildren = queue.length
    numChildren ? widthArr.push(numChildren) : null
  }
  return widthArr
}

module.exports = levelWidth;
