export class LinkedList {         
  #head = null;              
  #tail = null;

  append(value) {
    if(this.#head === null) {
      let node = new Node(value);
      this.#head = node;
      this.#tail = node;
    }
    else {
      let node = new Node(value);
      this.#tail.next = node;
      this.#tail = node;
    }
  }

  prepend(value) {
    const prevFirstNode = this.#head;
    const newFirstNode = new Node(value, prevFirstNode)
    this.#head = newFirstNode;
  }

  size() {
    if(this.#head === null) return `Total size: 0`;
    else {
      let curr = this.#head;
      let size = 1;
      while(curr.next != null) {
        curr = curr.next;
        size++;
      }
      return size;
    }
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  at(index) { 
    if(typeof index != 'number') return 'Index must be an number!';
    if(index > this.size()) return 'Node at that index does not exists!';
    let currNode = this.#head;
    let i = 0;
    while(i != index) {
      currNode = currNode.next;
      i++;
    };
    return currNode;
  }

  pop() {
    let currNode = this.#head;
    while(currNode.next.next != null) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.#tail = currNode;
  }

  contains(value) {                
    let currNode = this.#head;
    while(currNode != null) {
      if(currNode.value === value) {
        return true;
      }
      currNode = currNode.next
    }
    return false;
  }
  
  find(value) {
    let currNode = this.#head;
    let i = 0;
    while(currNode != null) {
      if(value === currNode.value) {
        return i;
      }
      currNode = currNode.next;
      i++;
    }
    return null;
  }

  toString() {
    let oldString = '';   
    let newString = '';       
    let currNode = this.#head;
    while(currNode != null) {
      newString = oldString.concat('(', currNode.value, ')', ' -> ');
      oldString = newString;
      currNode = currNode.next;
    } 
    newString = newString.concat('null')
    return newString;
  }
                            
  insertAt(value, index) {       
    let currNode = this.#head;
    let i = 0;

    while(i != index - 1) {
      if(currNode.next === null) { // If true, we reached the end of the list
        let node = new Node(value);
        currNode.next = node;
        this.#tail = node;  
        return 'The end of the list reached, node added';
      } else {
        currNode = currNode.next;
        i++;
      }
    }
    let node = new Node(value);
    node.next = currNode.next
    currNode.next = node;
  }

  removeAt(index) {
    let currNode = this.#head
    let i = 0;

    while(i != index - 1) {
      if(currNode === null) {
        return 'Node at that index does not exist in List.';
      } else {
        currNode = currNode.next;
        i++;
      } 
    }
    if(currNode.next.next === null) { // We have to update the tail of the list in case we are removing the node at the end
      this.#tail = currNode;
    }
    currNode.next = currNode.next.next;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next
  }

}