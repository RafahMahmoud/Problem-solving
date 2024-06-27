// class Stack {
//         constructor() {
//           this.items = []; 
//         }
        
    
      
//         push(number) {
//           this.items.push(number); 
//         }
//         pop() {
//             if (this.isEmpty()) {
//               return
//             }
//             return this.items.pop();
//           }
//           isEmpty() {
//             return this.items.length === 0;
//           }
      
//       }
//       let stack = new Stack();
//       for (let i = 0; i < 6; i++) {
//         stack.push(i)
//       }
      
//       console.log(stack);
//       class StackTwo {
//         constructor() {
//           this.items = []; 
//         }
//         push(num) {
//           this.items.push(num); 
//         }
      
//       }
//       let stacktwo = new StackTwo();
//       for (let i = 0; i < 6; i++) {
//         let x = stack.pop();
//         stacktwo.push(x)
//         } 
// console.log(stacktwo);

 


// class StackOne {
//     constructor() {
//       this.items = [];
//     }
  
//     push(number) {
//       this.items.push(number);
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         return;
//       }
//       return this.items.pop();
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }
  
//   class StackTwo {
//     constructor() {
//       this.items = [];
//     }
  
//     push(num) {
//       this.items.push(num);
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         return;
//       }
//       return this.items.pop();
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     peek() {
//       if (this.isEmpty()) {
//         return undefined;
//       }
//       return this.items[this.items.length - 1];
//     }
//   }
  
//   class Queue {
//     constructor() {
//       this.stackOne = new StackOne();
//       this.stackTwo = new StackTwo(); 
//     }
  
//     enqueue(number) {
//       this.stackOne.push(number);
//       return `${number} inserted`;
//     }
  
//     dequeue() {
//       if (this.stackTwo.isEmpty()) {
//         while (!this.stackOne.isEmpty()) {
//           this.stackTwo.push(this.stackOne.pop());
//         }
//       }
  
//       if (!this.stackTwo.isEmpty()) {
//         return this.stackTwo.pop();
//       } else {
//         return "Queue is empty";
//       }
//     }
  
//     peek() {
//       if (this.stackTwo.isEmpty()) {
//         while (!this.stackOne.isEmpty()) {
//           this.stackTwo.push(this.stackOne.pop());
//         }
//       }
  
//       return this.stackTwo.peek();
//     }
  
//     isEmpty() {
//       return this.stackOne.isEmpty() && this.stackTwo.isEmpty();
//     }
  
//     get printQueue() {
//       return this.stackTwo.items.concat(this.stackOne.items.reverse());
//     }
//   }
  
//   let queue = new Queue();
  
//   console.log(queue.enqueue(1)); 
//   console.log(queue.enqueue(2)); 
//   console.log(queue.enqueue(3));
  
//   console.log("Peek:", queue.peek()); 
  
//   console.log("Dequeue:", queue.dequeue());
//   console.log("Dequeue:", queue.dequeue()); 
  
//   console.log("Is empty:", queue.isEmpty()); 
  
//   console.log("Dequeue:", queue.dequeue()); 
//   console.log("Dequeue:", queue.dequeue()); 
  
//   console.log("Is empty:", queue.isEmpty()); 
  
//   console.log("Final Queue:", queue.printQueue);





// function sum(array, i = 0) {
//     if (i == array.length) {
//         return 0;
//     } else {
//         return array[i] + sum(array, i + 1);
//     }
// }
// let array = [1, 2, 3];
// console.log(sum(array));
  


// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     insert(value) {
//       const newNode = new Node(value);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//       this.size++;
//     }
  
//     reverse() {
//       let prev = null;
//       let current = this.head;
//       let next = null;
  
//       while (current !== null) {
//         next = current.next; 
//         current.next = prev; 
//         prev = current; 
//         current = next;
//       }
  
//       this.head = prev; 
//     }
  
//     printList() {
//       let current = this.head;
//       let result = [];
//       while (current !== null) {
//         result.push(current.value);
//         current = current.next;
//       }
//       console.log(result.join(' -> '));
//     }
//   }

//   let linkedList = new LinkedList();
//   linkedList.insert(1);
//   linkedList.insert(2);
//   linkedList.insert(3);
//   linkedList.insert(4);
  
//   console.log("Original Linked List:");
//   linkedList.printList(); 
  
//   linkedList.reverse();
  
//   console.log("Reversed Linked List:");
//   linkedList.printList(); 
  




// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }

//     insert(value) {
//       const newNode = new Node(value);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//       this.size++;
//     }
  
    
//     deleteMiddleNode() {
//       if (!this.head || !this.head.next) {
        
//         return null;
//       }
  
//       let slowPtr = this.head;
//       let fastPtr = this.head;
//       let prev = null;
  
//       while (fastPtr && fastPtr.next) {
//         prev = slowPtr; 
//         slowPtr = slowPtr.next; 
//         fastPtr = fastPtr.next.next; 
//       }

//       prev.next = slowPtr.next;
//       this.size--;
  
//       return slowPtr;
//     }
  
   
//     printList() {
//       let current = this.head;
//       let result = [];
//       while (current !== null) {
//         result.push(current.value);
//         current = current.next;
//       }
//       console.log(result.join(' -> '));
//     }
//   }

//   let linkedList = new LinkedList();
//   linkedList.insert(1);
//   linkedList.insert(2);
//   linkedList.insert(3);
//   linkedList.insert(4);
//   linkedList.insert(5);
  
//   console.log("Original Linked List:");
//   linkedList.printList();
  
//   let deletedNode = linkedList.deleteMiddleNode();
//   console.log("Deleted Node:", deletedNode ? deletedNode.value : null); 
  
//   console.log("Updated Linked List:");
//   linkedList.printList();





function isBalanced(exp) {
    let stack = [];
    const map = {
      '{': '}',
      '(': ')',
      '[': ']'
    };
  
    for (let i = 0; i < exp.length; i++) {
      let char = exp[i];
      
      if (char === '{' || char === '(' || char === '[') {
        stack.push(char);
      } else if (char === '}' || char === ')' || char === ']') {
        if (stack.length === 0) {
          return "Not Balanced";
        }
        
        let top = stack.pop();
        if (map[top] !== char) {
          return "Not Balanced";
        }
      }
    }
  
    return stack.length === 0 ? "Balanced" : "Not Balanced";
  }
  

  let exp1 = "[()]{}{[()()]()}";
  let exp2 = "[(])";
  let exp3 = "((())";
  let exp4 = "";
  
  console.log("Expression:", exp1, "\tOutput:", isBalanced(exp1)); 
  console.log("Expression:", exp2, "\tOutput:", isBalanced(exp2)); 
  console.log("Expression:", exp3, "\tOutput:", isBalanced(exp3)); 
  console.log("Expression:", exp4, "\tOutput:", isBalanced(exp4)); 
  
  
