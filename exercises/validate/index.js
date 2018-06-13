// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

  if(node === null){
    return true
  } else if (node.left && (node.left.data < min || node.left.data > (max || node.data))){
    return false
  } else if(node.right && (node.right.data < (min || node.data) || node.right.data > max)){
    return false
  } else {
    return validate(node.left, min , node.data) && validate(node.right, node.data, max)
  }
}

module.exports = validate;
