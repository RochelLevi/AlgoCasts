// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

function privateReverseStack(fullStack, emptyStack){
  while(fullStack.peek() !== undefined){
    emptyStack.push(fullStack.pop())

  }
}

class Queue {
  constructor(){
    this.stackOne = new Stack()
    this.stackTwo = new Stack
  }

  add(data){
    this.stackOne.push(data)
  }

  remove(){
    // while (this.stackOne.peek() !== undefined){
    //   this.stackTwo.push(this.stackOne.pop())
    // }
    privateReverseStack(this.stackOne, this.stackTwo)
    let retElement = this.stackTwo.pop()
    // while (this.stackTwo.peek()){
    //   this.stackOne.push(this.stackTwo.pop())
    // }
    privateReverseStack(this.stackTwo, this.stackOne)
    return retElement
  }

  peek(){
    privateReverseStack(this.stackOne, this.stackTwo)
    let retElement = this.stackTwo.peek()
    privateReverseStack(this.stackTwo, this.stackOne)
    return retElement
  }
}

module.exports = Queue;
