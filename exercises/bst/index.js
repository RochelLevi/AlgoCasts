// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data){
    let newNode = new Node(data)

    let currNode = this

    while(currNode){
      if(data < currNode.data && currNode.left){
          currNode = currNode.left
      }else if (data < currNode.data ) {
          currNode.left = newNode
          return
      }else if(data > currNode.data && currNode.right){
          currNode = currNode.right
      }else {
        currNode.right = newNode
        return
      }
    }
  }

  contains(data){
    let currNode = this

    while(currNode){
      if(data === currNode.data){
        return currNode
      }
      if(data <= currNode.data){
        currNode = currNode.left
      } else{
        currNode = currNode.right
      }
    }
    return null
  }
}

module.exports = Node;
