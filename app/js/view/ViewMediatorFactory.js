import WorldViewMediator from './mediator/WorldViewMediator';
import PointViewMediator from './mediator/PointViewMediator';


export default class ViewMediatorFactory {
    getMediator(worldObject) {
        switch (worldObject.className) {
            case 'World':
                return new WorldViewMediator(worldObject, this);
            case 'Point':
                return new PointViewMediator(worldObject, this);
        }
    }
}
