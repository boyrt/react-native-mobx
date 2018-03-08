import { observable } from 'mobx'

class CounterStore {
    @observable counter = 0;
    @observable remoteCounter = 0;

    constructor(){}

    increment(){
        this.counter++;
    }

    decrement(){
        this.counter--;
    }

    incrementAsync(){
        setTimeout(()=>{
            this.counter++
        },500);
    }
}

const counterStore = new CounterStore;

export default counterStore;
