/**
 * Super Class
 */
class Doctor {
    constructor(doctorName, age, education, hasSchedule){
        this.name = doctorName;
        this.age = age;
        this.education = education;
        this.hasSchedule = hasSchedule;
    }

    displayDoctorInfo(){
        console.log("Here's the Data:", this);
    }
}

 
/**
 * Sub Classes
 */
class KenyanDoctors extends Doctor {
    constructor(doctorName, age, education, hasSchedule){
        super();
        this.name = doctorName;
        this.age = age;
        this.education = education;
        this.hasSchedule = hasSchedule;
    }

    displayDoctorInfo(){
        console.log("Kenyan Dr Info:", this);
    }
    
    telehealthReservations(){
        console.log("Telehealth Implemented");
    }
}

class EgyptianDoctors extends Doctor {
    constructor(doctorName, age, education, hasSchedule){
        super();
        this.name = doctorName;
        this.age = age;
        this.education = education;
        this.hasSchedule = hasSchedule;
    }

    displayDoctorInfo(){
        console.log("Egyptian Dr Info:", this);
    } 
    
    homeVisitReservations(){
        console.log("Home Visit Implemented");
    }
}


class SaudianDoctors extends Doctor {
    constructor(doctorName, age, education, hasSchedule){
        super();
        this.name = doctorName;
        this.age = age;
        this.education = education;
        this.hasSchedule = hasSchedule;
    }

    displayDoctorInfo(){
        console.log("Saudi Dr Info:", this);
    }  
    
    physicalReservations(){
        console.log("Physical Implemented");
    }
}

/**
 * Class Interface
 */
class ReservationTypes {
    reservations(){}
}

class Telehealth extends ReservationTypes {
    constructor(){
        super();
    }
    reservations(){
        console.log("Telehealth Implemented in Interface");
    }
}



//let doctor1 = new Doctor();
//doctor1.displayDoctorInfo();

//let doctor2 = new KenyanDoctors("micheal", 30, "kenya university", false);
//doctor2.displayDoctorInfo();

////////////////////////////////////////////////////////////////////////////////////

class Strategies {
    constructor(){
        this._strategy = null;
    }

    setChild(child){
        this._strategy = child;
    }
    getChild(){
        return this._strategy;
    }
    callChild(){
        this._strategy.callChild();
    }
}

class Strategy1 extends Strategies {
    callChild(){
        console.log("i'm Strategy1");
    }
}

class Strategy2 extends Strategies {
    callChild(){
        console.log("i'm Strategy2");
    }
}



module.exports = function () {
    console.log("<<Strategy>>");
    let strategies = new Strategies();
    let strategy2 = new Strategy2();
    strategies._strategy = strategy2;
    strategies.callChild(); 
}