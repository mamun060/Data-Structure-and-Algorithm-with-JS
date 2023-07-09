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
       this.head = node;
       this.tail = node;
       this.length = 1;
    }

    append(value){
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
}

let list = new LinkedList(10);
list.append(20)
list.append(30)
list.prepend(40)

console.log(list);
