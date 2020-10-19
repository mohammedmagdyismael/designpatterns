/**
 * Subject Interface
 */
let instance = null;
class Singleton {
    constructor() {}
    static getInstance() {
        if(!instance) {
            instance = new Singleton();
            return instance;
        }
        return null;
    }

    print() {console.log("test");}
}

module.exports = function () {
    try {
        let instance = Singleton.getInstance();
        instance.print();
        let instance1 = Singleton.getInstance();
        instance1.print();
    } catch (error) {
        console.log("Instance Already created")
    }
}
