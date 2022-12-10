class Stack {
    constructor(stackSize){
        this.stackSize = stackSize;
        this.stackArray = new Array(this.stackSize);
        this.position = -1;

    }
    push(item){
        try {
            this.position += 1;
            this.stackArray[this.position] = item;
            if(this.position === this.stackSize - 1) {
                Object.seal(this.stackArray);
            }
        } catch(error) {
            console.log(error);
        }
        
    }
    pop(){
        try {
            this.stackArray[this.position] = null;
            this.position -= 1;
        } catch (error) {
            console.log("Stack is Empty!")
        }
        
    }
    print(){
        console.log(this.stackArray);
    }
    isEmpty(){
        return this.position === -1;
    }

    peekValue(){
        return this.stackArray[this.position];
    }
}


module.exports = function () {
     let stack = new Stack(3);
     stack.push(3);
     stack.push(2);
     stack.push(1); 
     stack.pop();
     stack.push(6);
     stack.pop();
     stack.pop();
     stack.pop();
     stack.pop();
     stack.print();
     stack.push(7);
     console.log('Stack Peek Value: ', stack.peekValue());
     console.log('Stack is Empty? ', stack.isEmpty());
}

