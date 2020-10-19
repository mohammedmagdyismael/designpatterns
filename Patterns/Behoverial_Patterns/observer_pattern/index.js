/* Interface */
class Subject {
    constructor() {
        if (new.target === Subject) {
          throw new TypeError("non instantiable class");
        }
    }
    subscribeObserver(){}
    notifyObservers(){}
    removeObserver(){}
}

class Weather extends Subject {
    constructor(){
        super();
        this.observers = [];
        this.temperature = 0;
    }
    subscribeObserver(observer){
        this.observers.push(observer)
    }; 
    notifyObservers(){
        this.observers.forEach(obs=>{
            obs.notify(`it's ${this.temperature}`);
        })
    }
    removeObserver(observer){
        const removeIndex = this.observers.findIndex(obs => {
            return observer === obs;
          });
      
          if (removeIndex !== -1) {
            this.observers = this.observers.slice(removeIndex, 1);
          }
    } 

    // set Temperature from source 
    setTemperature(degree){
        this.temperature = degree;
    }
}

class Observer{
    constructor() {
        if (new.target === Observer) {
          throw new TypeError("non instantiable class");
        }
    }
    notify(){}
}

class Device extends Observer{
    constructor(name){
        super();
        this.observerName = name;
    }
    notify(msg){
        console.log(this.observerName+" "+msg)
    }
}





module.exports = function () {
    console.log("<<Observer>>");
    let mobileDevice = new Device("samsung A30");
    let laptopDevice = new Device("HP Laptop");

    let weatherStation = new Weather();
    weatherStation.subscribeObserver(mobileDevice);


    weatherStation.setTemperature(35);
    
    weatherStation.notifyObservers();

 
}