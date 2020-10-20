


/**
 * Subject Interface
 */

class Iterator {
    constructor() {
        if (new.target === Iterator) {
          throw new TypeError("non instantiable class");
        }
    }
    toFirst(){}
    next(){}
    isLast(){}
    currentItem(){}
    getSize(){}
}

class ListIterator extends Iterator {
    constructor(dataCollection){
        super();
        this.dataCollection = dataCollection;
        this.position = -1;
    }
    toFirst(){
        this.position = 0;
    }
    next(){
        this.position += 1;
        return this.dataCollection[this.position];
    }
    isLast(){
        return this.dataCollection.length === this.position;
    }
    currentItem(){
        return this.dataCollection[this.position];
    }
    getSize(){
        return this.dataCollection.length
    }
}

class IteratableCollection {
    constructor() {
        if (new.target === IteratableCollection) {
          throw new TypeError("non instantiable class");
        }
    }
    setData(){}
    createIterator(){}
}

class ListCollection extends IteratableCollection {
    constructor(){
        super();
        this.list = [];
    }
    setData(list){
        this.list = list;
    }
    createIterator(){
        return new ListIterator(this.list)
    }
}

module.exports = function () {
    let list = [3,6,1,5,3,8,6,10];
    let listCollection = new ListCollection();
    listCollection.setData(list);
    let listIterator = listCollection.createIterator();

    listIterator.toFirst();
    while (!listIterator.isLast()){
        console.log(listIterator.currentItem());
        listIterator.next();
    }
}
