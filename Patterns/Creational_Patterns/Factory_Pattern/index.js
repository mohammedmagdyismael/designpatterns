/**
 * Interface
 */
class PaymentMethods {
    constructor() {
        if (new.target === PaymentMethods) {
          throw new TypeError("non instantiable class");
        }
    }
    createPayment(){};
}

class Cash extends PaymentMethods {
    constructor() {
        super();
    }
    createPayment(){
        console.log('Cash Payment Method Created');
    };
}

class Credit extends PaymentMethods {
    constructor() {
        super();
    }
    createPayment(){
        console.log('Credit Payment Method Created');
    };
}

class PaymentMethodFactory {
    constructor() {
        this.paymentMethodId = {
            credit: 0,
            cash: 1,
        }
    }
    selectPaymentMethod(paymentMethodId){
        if(paymentMethodId === this.paymentMethodId.credit) {
            return new Credit();
        }
        if(paymentMethodId === this.paymentMethodId.cash) {
            return new Cash();
        }
    }
}


module.exports = function () {
    let paymentFactory = new PaymentMethodFactory();
    let method = paymentFactory.selectPaymentMethod(1);
    method.createPayment();
}
