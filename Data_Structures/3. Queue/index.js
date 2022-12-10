class Queue {
    constructor(queueSize){
        this.queueSize = queueSize;
        this.queueArray = new Array(this.queueSize);
        this.FrontPosition = -1;
    }
    
    enqueue(item){
        if (this.FrontPosition  === this.queueSize - 1) {
            console.log("Queue is Full!");
            return -1;
        }
        this.FrontPosition += 1;
        this.queueArray.unshift(item);
    }

    dequeue(){
        if (this.FrontPosition !== -1) {
            let dequeuedItem = this.queueArray[this.FrontPosition]; 
            this.queueArray[this.FrontPosition] = null;
            this.FrontPosition -= 1;
            return dequeuedItem
        } else {
            console.log("Queue is empty");
            return -1;
        }
    }
    print(){
        console.log(this.queueArray);
    }
    isEmpty(){
        return this.FrontPosition === -1;
    }
}


module.exports = function () {
     let queue = new Queue(10);
     queue.enqueue(1);
     queue.enqueue(2);
     queue.enqueue(1);
     queue.enqueue(2);
     queue.enqueue(1);
     queue.enqueue(2);
     queue.enqueue(1);
     queue.enqueue(2);
     queue.enqueue(1);
     queue.enqueue(2); 
     queue.print();
}

