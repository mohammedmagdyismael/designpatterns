/**
 * Subject Interface
 */

class AccessToDB {
    constructor() {
        if (new.target === AccessToDB) {
          throw new TypeError("non instantiable class");
        }
    }
    readDB(){};
}

class ProxyToDB extends AccessToDB {
    constructor() {
        super();
        this.Database = new Database();
    }
    readDB(credentials){
        if(credentials.id === 123) {
            this.Database.readDB();
        }
        else {
            console.log("Wrong Credentials");
        }
    };
}

class Database extends AccessToDB {
    constructor() {
        super();
    }
    readDB(){
        console.log("Logged in to DB Successfully")
    };
}

module.exports = function () {
     let dbProxy = new ProxyToDB();
     dbProxy.readDB({id: 123})
}
