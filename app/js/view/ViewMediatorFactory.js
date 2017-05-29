import WorldViewMediator from './mediator/WorldViewMediator';
import PointViewMediator from './mediator/PointViewMediator';
import PedestalViewMediator from './mediator/PedestalViewMediator';


export default class ViewMediatorFactory {
    getMediator(renderObject) {
        switch (renderObject.className) {
            case 'World':
                return new WorldViewMediator(renderObject, this);
            case 'Point':
                return new PointViewMediator(renderObject, this);
            case 'Pedestal':
                return new PedestalViewMediator(renderObject, this);
            default:
                throw new Error("no mediator for " + renderObject.className);
        }
    }
}
