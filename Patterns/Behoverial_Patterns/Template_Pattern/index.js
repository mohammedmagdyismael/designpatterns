


/**
 * Subject Interface
 */

class ReservationSteps {
     selectDoctor(){
        console.log("Doctor Selected");
     }
     selectDate(){
        console.log("Date Selected");
     }
     optionalStep(){}
     enterPatientInfo(){
        console.log("Patient Infor Entered");
     }
     book(){
        console.log("Reservation Booked");
     }

     executeSteps(){
         this.selectDoctor();
         this.selectDate();
         this.optionalStep();
         this.enterPatientInfo();
         this.book()
     }
}

class TelehealthReservationSteps extends ReservationSteps {
     constructor(){
         super();
     }
     optionalStep(){
         console.log("OTP");
     }
}

class PhysicalReservationSteps extends ReservationSteps {
    constructor(){
        super();
    }
    optionalStep(){
        console.log("MRN List");
    }
}
 


module.exports = function () {
    let PhysicalReservation = new PhysicalReservationSteps();
    PhysicalReservation.executeSteps();
    console.log("===================================================;")
    let telehealthReservation = new TelehealthReservationSteps();
    telehealthReservation.executeSteps();
}
