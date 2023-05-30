// implementation of Single Linked List

// Every single element need to Node for store element and next
class Node{
    constructor(data , next = null){
        this.data =  data;
        this.next = next;
    }
}

// all node list listed by here and doing operation by here

class LinkedList{
    constructor(data){
       let node = new Node(data);
       this.data = node.data;
       this.next = node.next;
       this.head = node;
       this.tail = node;
    }
}

let list = new LinkedList(10);

console.table(list);
