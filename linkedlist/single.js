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

    appendAtPosition(value, n){
        if(n === 1 ){
            this.prepend(value);
            return;
        }
        if( n === this.length + 1){
            this.append(value);
            return 
        }

        let node = new Node(value);
        let prevNode = this.findNode(n-1);
        const temp = prevNode.next;
        prevNode.next = node;
        node.next = temp;
        this.length++;
    }

    findNode(n){
        let data = this.head;
        let count = 0;
        while(true){
            count++;
            if(count === n){
                break;
            }
            data = data.next;
        }

        return data;
    }

    print(){
        let data = this.head;
        while(data){
            console.log(data.value);
            data = data.next
        }
    }
}


let list = new LinkedList(10);
list.appendAtPosition(30,1)
list.prepend(50)

// console.log(list);
list.print()
