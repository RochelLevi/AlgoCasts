// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
      this.head = new Node(data, this.head)
  }

  size(){
    let length = 0;
    let currNode = this.head

    while (currNode){
      length++
      currNode = currNode.next
    }

    return length
  }

  getFirst(){
    return this.head
  }

  getLast(){

    let currNode = this.head

    while (currNode){
      if (!currNode.next){
        return currNode
      }
      currNode = currNode.next
    }
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    this.head = this.head ? this.head.next : null
  }

  removeLast(){

    if(!this.head ){
      return
    } else if(!this.head.next){
      this.head = null
      return
    }

    let prevNode = this.head
    let currNode = this.head.next

    while (currNode.next){
      prevNode = currNode
      currNode = currNode.next
    }

    prevNode.next = null
  }

  insertLast(data){
    this.getLast() ? this.getLast().next = new Node(data) : this.head = new Node(data)
  }

  getAt(i){
    if(i < 0){
      return null
    }

    let j = 0
    let currNode = this.head

    while (j < i && currNode){
      currNode = currNode.next
      j++
    }

    return currNode

  }

  removeAt(i){

    let prev = this.getAt(i - 1)
    let curr = prev ? prev.next : this.getAt(i )
    let next = curr ? curr.next : this.getAt(i + 1)

    if(prev && curr){
      prev.next = next
    } else{
      this.head = next
    }
  }

  insertAt(data, i){
    let newNode = new Node(data)
    let prev = this.getAt(i - 1)
    let curr = prev ? prev.next : this.getAt(i)

    if(prev && curr){
      prev.next = newNode
      newNode.next = curr
    } else if (prev){
      prev.next = newNode
    } else if(curr || i < 0){
      this.insertFirst(data)
    } else {
      this.insertLast(data)
    }
  }

  forEach(callback){
    for (let i = 0; i < this.size; i++){
      callback(this.getAt(i), i)
    }
  }
}

module.exports = { Node, LinkedList };
