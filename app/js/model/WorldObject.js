import Observable from '../Observable';

export default class WorldObject extends Observable {
    constructor(name, properties = {}) {
        super();
        this.name = name;
        this.properties = properties;
    }
}
