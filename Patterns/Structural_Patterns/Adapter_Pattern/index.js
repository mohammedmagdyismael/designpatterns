/**
 * Interface
 */
class CollectionAdapter {
    constructor() {
        if (new.target === CollectionAdapter) {
          throw new TypeError("non instantiable class");
        }
    }
    toListAdapter(){};
    toJSONdapter(){};
}

class MapToListAdapter extends CollectionAdapter {
    constructor(){
        super();
    }
    toListAdapter(data){
        let list = [];
        data.forEach(element => {
            list.push(element.name);
        });
        return list
    }
}

class SetToListAdapter extends CollectionAdapter {
    constructor(){
        super();
    }
    toListAdapter(data){
        let list = [];
        for (let item of data) {
            list.push(item);
        }
        return list
    }
}


class DataConsumer {
    constructor() {
        if (new.target === DataConsumer) {
          throw new TypeError("non instantiable class");
        }
    }
    readData(){}
}

class PatientDataConsumer extends DataConsumer {
    constructor() {
        super();
        this.adapter = new Adapter();
    }
    readData(data){
        if (data instanceof Map) {
            return this.adapter.readData(data);
        }
        if (data instanceof Set) {
            return this.adapter.readData(data);
        }
        return data;
    }
}

class Adapter extends DataConsumer {
    constructor() {
        super();
    }
    readData(data){
        return this.adapte(data);
    }
    adapte(data){
        if (data instanceof Map) {
            let mapTolist = new MapToListAdapter();
            return mapTolist.toListAdapter(data)
        } 
        if (data instanceof Set) {
            let setTolist = new SetToListAdapter();
            return setTolist.toListAdapter(data)
        } 
    }
}
 

module.exports = function () {

    /**
     * Convert Any data collection to List
     */

    /**
     * Map Collection
     */
    let mapCollection = new Map();
    mapCollection.set('patient1', {name: 'mohammed magdy'});
    mapCollection.set('patient2', {name: 'Amr hosseny'});
    mapCollection.set('patient3', {name: 'bahaa hussein'});

    /**
     * Set Collection
     */
    let setCollection = new Set();
    setCollection.add('mohammed magdy');
    setCollection.add('Amr hosseny');
    setCollection.add('bahaa hussein');

    /**
     * List Collection
     */
    let listCollection = [ 'mohammed magdy', 'Amr hosseny', 'bahaa hussein' ];


    let newPatientDataConsummer = new PatientDataConsumer();
    console.log(newPatientDataConsummer.readData(setCollection));

}
