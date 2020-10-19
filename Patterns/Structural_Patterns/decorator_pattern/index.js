/**
 * Subject Interface
 */

class Payments {
    constructor() {
        if (new.target === Payments) {
          throw new TypeError("non instantiable class");
        }
    }
    addToCart(){};
}

/**
 * Concerete Component
 */
class BasicPayments extends Payments {
    constructor(){
        super();
        this.basicPayment = 30;
    };
    /**
     * Override addToCart method
     */
    addToCart() {
        console.log("Basic Payment:", this.basicPayment);
        return this.basicPayment;
    }
}

/**
 * Decorator Component
 */
class ExtraPayments extends Payments {
    constructor(){
        super();
    }
    addToCart(){};
    myExtraValue(){};
}

/**
 * Decorator: Extra1
 */
class Extra1 extends ExtraPayments {
    constructor(props){
        super();
        this.previousAccumilatedComponents = props.component;
    };
    /**
     * Override addToCart method
     */
    addToCart(){
        const componentValue = this.previousAccumilatedComponents.addToCart();
        const newExtra1Value = componentValue + 40;
        console.log("+ Extra1", 40);
        console.log("Total: ", newExtra1Value);
        return newExtra1Value;
    };
}

/**
 * Decorator: Extra2
 */
class Extra2 extends ExtraPayments {
    constructor(props){
        super();
        this.previousAccumilatedComponents = props.component;
    };
    /**
     * Override addToCart method
     */
    addToCart(){
        const componentValue = this.previousAccumilatedComponents.addToCart();
        const newExtra1Value = componentValue + 70;
        console.log("+ Extra2", 70);
        console.log("Total: ", newExtra1Value);
        return newExtra1Value;
    };
}



module.exports = function () {
    console.log("decorator");
    let doctorBasicPayment = new BasicPayments();
    let extra1 = new Extra1({component: doctorBasicPayment});
    let extra2 = new Extra2({component: extra1});
    extra2.addToCart();
}
