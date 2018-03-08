import { observable } from 'mobx'

class OpenStore {
    @observable open = true

    constructor() {
    }

    openT() {
        this.open = true
    }

    close() {
        this.open = false
    }
}

const openStore = new OpenStore

export default openStore;