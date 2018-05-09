// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  if(!list.head){
    return false
  }

  let curr = list.head
  let hashMap = new Map()
  hashMap.set(curr, 1)

  while(curr.next){
    if (hashMap.get(curr.next)){
      return true
    }
    hashMap.set(curr.next, 1)
    curr = curr.next
  }

  return false
}

module.exports = circular;
