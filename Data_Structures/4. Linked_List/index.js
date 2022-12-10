class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    // Traversal
    print(){
        let node = this.head;
        while (node) {
            console.log(node.data)
            node = node.next;
        }
    }
    // Insertion
    // 1. insert at first
    insertAtHead(node){
        let temp = this.head;
        this.head = node;
        node.next = temp;
    }
}

module.exports = function () {
     let linkedList = new LinkedList();
     linkedList.head = new Node(1)
     let node2 = new Node(2);
     let node3 = new Node(3);

     // Linking
     linkedList.head.next = node2;
     node2.next = node3;

     // Insert at head
     linkedList.insertAtHead(new Node(200));
     

     linkedList.print();
}

