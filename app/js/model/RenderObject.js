import Observable from '../Observable';

export default class RenderObject extends Observable {
    constructor(name, properties = {}) {
        super();
        this.name = name;
        this.properties = properties;
    }
}
