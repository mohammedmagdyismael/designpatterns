


/**
 * Subject Interface
 */

class Component {
    constructor() {
        if (new.target === Component) {
          throw new TypeError("non instantiable class");
        }
    }
    addToCart(){};
}

class Leaf extends Component {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
    getPrice(){
        console.log(`${this.name} : ${this.price}`);
        return this.price;
    };
}

class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }
    addChildren(component){
        this.children.push(component);
    }
    getPrice(){
        let totalPrice = 0;
        this.children.forEach(element => {
            totalPrice += element.getPrice();
        });
        console.log(`${this.name} : ${totalPrice}`);
        return totalPrice;
    };
}
 


module.exports = function () {
    /**
     * PC (screen, cpu)
     * cpu (mouse, keyboard, motherboard)
     * motherboard (ports, memory)
     * memory (hd,ram)
     */

    // Leafs
    let screen = new Leaf('screen', 3000);
    let mouse = new Leaf('mouse', 500);
    let keyboard = new Leaf('keyboard', 100);
    let ports = new Leaf('ports', 5000);
    let hd = new Leaf('hd', 10000);
    let ram = new Leaf('ram', 600);

    // Composits
    let pc = new Composite('pc');
    let cpu = new Composite('cpu');
    let motherboard = new Composite('motherboard');
    let memory = new Composite('memory');
    
    memory.addChildren(hd);
    memory.addChildren(ram);
    
    motherboard.addChildren(ports);
    motherboard.addChildren(memory);

    cpu.addChildren(mouse);
    cpu.addChildren(keyboard);
    cpu.addChildren(motherboard);
    
    pc.addChildren(screen);
    pc.addChildren(cpu);

    pc.getPrice();
}
