import 'babel-polyfill';
import 'three';
import WorldController from './js/controller/WorldController';
import World from './js/model/World';
import Point from './js/model/Point';

const world = new World();
const worldController = new WorldController(world);
let test = new Point("James",{position:{x:1, y:1}});

let test2 = new Point("James",{position:{x:-1, y:-1}});


world.addPoint(test);
world.addPoint(test2);
